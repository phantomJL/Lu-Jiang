 function send() {
    var link = 'mailto:ljiang5@uci.edu?subject=Message from '
             +document.getElementById('name').value
             +'&body='+document.getElementById('email').value;
    window.location.href = link;
}