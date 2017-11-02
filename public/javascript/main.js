document.readyState(function() {
    $('#Stratego').on('click', function(e) {
        console.log('click');
        e.preventDefault();
        window.location.href = '/Downloads/Stratego.jar';
        setTimeout(function() {
            window.location.href = '/resume/portfolio';
        }, 300);
    });
})