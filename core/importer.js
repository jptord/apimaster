const { Client } = require('pg');
const { Database } = require('../core/database.js');

// Database connection configuration
const dbConfig = {
	user: 'postgres',
	password: 'postgres',
	host: 'localhost',
	port: '5432',
	database: 'trebol_personal',
};

// Create a new PostgreSQL client
const client = new Client(dbConfig);


class ImporterPG {

	constructor(db_array, req, res) {
		this.db_array = db_array;
		this.dbData = db_array.find(d => d.db == req.query.db);
		this.req = req;
		this.res = res;
		this.database = new Database(this.dbData.db);
	}

	toFields(data) {
		let strArr = [];
		Object.keys(data).forEach(c => {
			if (!data[c].includes('[[') && !data[c].includes('['))
				strArr.push(`'${c}'`);
		});
		return strArr.join(",");
	}
	formatValue(val,col_data){
		//console.log(col_data,val);
		if (val == 'null' || val == null  )
			return 'null';
		else{		
			if (col_data.dataTypeID == 3802) return `'${JSON.stringify(val)}'`;
			if (col_data.dataTypeID == 16) return `${val}`;
			return `'${val}'`;
		}
	}
	formatValueIn(val,col_data){		
		//jsonb '::TEXT'
		if ([1114].includes(col_data.dataTypeID)) return `EXTRACT(EPOCH FROM "${col_data.name}"::timestamp AT TIME ZONE 'UTC') as "${col_data.name}"`;
		if ([1082].includes(col_data.dataTypeID)) return `EXTRACT(EPOCH FROM ${col_data.name}::timestamp ) as ${col_data.name}`;
		//if ([1700,1082].includes(col_data.dataTypeID)) return `EXTRACT(EPOCH FROM ${col_data.name}::timestamp ) as ${col_data.name}`;
		
		return `"${col_data.name}"`;
	}
	
	start() {
		let me = this;
		//let db = me.database.db.prepare(relQuery).all();
		//this.dbData.groups.forEach(group => {
		let fromTable = "persons";
		let sw = false;
		client.connect(async (err) => {
			for (let i = 0; i < this.dbData.groups.length; i++) {
				let group = this.dbData.groups[i];
				let f = me.toFields(group.data['create']);
				let f_nc = me.toFields(group.data['create']).replaceAll("'","");
				let fs = f.split(',');
				let fs_nc = f.replaceAll("'","").split(',');
				if (err )
					console.log("err", err);
				/*if ((fromTable != group.name)&& !sw) continue;
				else sw = true;*/ // from to end
				if ((fromTable != group.name)) continue; // only equal
				
				let pk_field = group.fields.find(fld => fld.value.includes("pk"));
				let orderby = "";
				if (pk_field != null)
					orderby = ` ORDER BY ${pk_field.name}`;
				let query_sel = `SELECT * from public.${group.name} ${orderby} LIMIT 1`;				
				const res_temp = await client.query(query_sel);	
				console.log("res_temp.fields",res_temp.fields);
				let fr = res_temp.fields.map(fld=> me.formatValueIn(fld.name,fld)).join(',');	
				//console.log("fr",fr);

				let query_sel_formatter = `SELECT ${fr} from public.${group.name} ${orderby}`;					
				//console.log("query_sel_formatter",query_sel_formatter);
				//throw "here";

				const res = await client.query(query_sel_formatter);	
				let frr = res_temp.fields.map(fld=> `'${fld.name}'`).join(',');
				console.log("--res.fields",res.fields);
				for (let j = 0; j < res.rows.length; j++) {
					let row=res.rows[j];
					let f_data = res.fields.map(col => `${me.formatValue(row[col.name],col)}`);
					let query_insert = `INSERT INTO  ${group.name} (${frr}) values (${f_data.join(',')})`;
					console.log(query_insert);

					me.database.db.prepare(query_insert).run();
				};
				/*
				client.query(query_sel, [], (err, res) => {
					if (err) { console.log(err.stack); return; }
					res.rows.forEach(row => {
						let f_data = fs.map(col => `'${row[col]}'`);
						let query_insert = `INSERT INTO  ${group.name} (${f}) values (${f_data.join(',')})`;
						console.log(query_insert);

						me.database.db.prepare(query_insert).run();
					});
				});*/
				// me.database.db.prepare(`INSERT INTO  ${group.name} (${f}) values (${f_data})`).run();      
			}
		});

	}

}

module.exports = { ImporterPG };