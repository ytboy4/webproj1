var counter = 1;
var limit = 5;
function addInput(pName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " guests");
     }
     else {
          // var newp = document.createElement('p');
          // newp.innerHTML = "<label class='form-align' for='name2'>Guest " + (counter + 1) + ": </label>" + " <input type='text' name='name2'>";
          // document.getElementById(pName).appendChild(newp);
          var newp = document.getElementById(pName);
          document.getElementById(pName).insertAdjacentHTML('afterend', "<p class='form-align' id='dynamicInput'><label class='form-align' for='name" + counter + "'>Guest " + (counter + 1) + ": </label>" + " <input class='form-align' type='text' name='name" + counter + "' id='name" + counter + "' size='60' maxlength='100'></p>");
          newp.removeAttribute("id");
          counter++;
     }
}