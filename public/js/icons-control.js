let btnElegirIcon = $("#btnElegirIcon");
let iconSelected = '';
let elegirIcon = (event)=>{
    console.log("event", event);
    let input = $(event.target);
    let iconInput = $(input.parent().parent().find('.icondivinput'));
    var modalIcons = new bootstrap.Modal(document.getElementById('modalIcons'))
    console.log("modalIcons",modalIcons);
    modalIcons.show();

    btnElegirIcon.off('click');
    btnElegirIcon.on('click', (e) => {
        input.val(iconSelected);
        iconInput.html('<i class="'+iconSelected+'"></i>');
        console.log("seleccionado",iconSelected);
        modalIcons.hide();
    });
    /*exampleModal.addEventListener('show.bs.modal', function (event) {
      // Button that triggered the modal
      var button = event.relatedTarget
      // Extract info from data-bs-* attributes
      var recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an AJAX request here
      // and then do the updating in a callback.
      //
      // Update the modal's content.
      var modalTitle = exampleModal.querySelector('.modal-title')
      var modalBodyInput = exampleModal.querySelector('.modal-body input')
    
      modalTitle.textContent = 'New message to ' + recipient
      modalBodyInput.value = recipient
    })*/
};
$( document ).ready(function() {
    console.log("icons",icons);
    this.brand  = '';
    this.solid  = '';
    this.regular  = '';
    for (let entry of icons) {
        if (entry.attributes.membership.free.length) {
          for (let value of entry.attributes.membership.free) {
            switch (value) {
              case "brands":
                /*this.brand += '<div class="col-xl-2 col-lg-2 col-sm-3">\
                            <i class="fab fa-' + entry.id + '"></i> fab fa-' + entry.id + '\
                        </div>';*/
                this.brand += '<div class="iconsel col-xl-2 col-lg-2 col-sm-3" icon-name="fab fa-' + entry.id + '">\
                            <i class="fab fa-' + entry.id + '"></i> <label class="iconlabel"> fab fa-' + entry.id + '</label>\
                        </div>';
                break;
              case 'solid':
                this.solid += '<div class="iconsel col-xl-2 col-lg-2 col-sm-3" icon-name="fas fa-' + entry.id + '">\
                      <i class="fas fa-' + entry.id + '"></i> <label class="iconlabel"> fas fa-' + entry.id + '</label>\
                  </div>';
                break;
              default:
                this.regular += '<div class="iconsel col-xl-2 col-lg-2 col-sm-3" icon-name="far fa-' + entry.id + '">\
                            <i class="far fa-' + entry.id + '"></i> <label class="iconlabel"> far fa-' + entry.id + '</label>\
                        </div>';
            }
          }
        }
      }
    
      document.getElementById("solid").innerHTML = this.solid;
      document.getElementById("brand").innerHTML = this.brand;
      document.getElementById("regular").innerHTML = this.regular;

      $(".iconsel").click((e)=>{
            let iconName = $(e.currentTarget).attr("icon-name");
            console.log("iconName",iconName);
            //$(".iconmodal").empty();
            console.log("ic",`<i class="${iconName}"></i>`);
            document.getElementById("iconmodal").innerHTML = '<i class="'+iconName+'"></i>';
            iconSelected = iconName;
      });
});