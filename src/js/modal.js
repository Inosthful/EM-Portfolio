let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
$(function(){
    $('#p1 a').miniPreview({ 
        prefetch: 'pageload'
});
    $('#p2 a').miniPreview({ prefetch: 'pageload' });
})
