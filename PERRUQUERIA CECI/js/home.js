const getFormData = e => {
    e.preventDefault();
    
    var element = document.getElementById('form-alert');
    var wrapper = document.getElementById('sections-wrapper');
    var form = document.forms["signinForm"];
    var fields = [...form.elements];

    const popAlert = () => {
        if(element) return;
        var alert = document.createElement('section');
        alert.id = "form-alert";
        alert.className = "alert alert-danger text-center col-sm-8"
        alert.innerHTML = "Falten dades obligatòries per continuar!";
        wrapper.insertBefore( alert, wrapper.firstChild);
    };
    
    const cleanAlert = () => {
        if(!element) return;
        wrapper.removeChild(element);
    }

    var inputs = fields.splice(0, fields.length-1);
    if(inputs.find( e => e.value.trim() === '' && e.value !== null && e.id !== "signin-phone")) {
        return popAlert();
    } else cleanAlert();
    
    var name = form["signin-name"].value;
    var mail = form["signin-mail"].value;
    alert(`S'ha enviat correctament el comprovant a ${mail}\nEns posarem en contacte amb tu, ${name}.`);
};