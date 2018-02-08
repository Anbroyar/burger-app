$(function() {
    $('#addBurger').on('click', function(event) {
        event.preventDefault();
        $.ajax('/api/new', {
            type: 'POST',
            data: { burger_name: $('#burger').val().trim() }
        }).then(
            function() {
                console.log('Burger has been added!');
                location.reload();
            }
        );
    });
    $('.devourBtn').on('click', function(event) {
        var id = $(this).data('id');
        $.ajax('/api/new' + id, {
            type: 'PUT',
            data: { devoured: true }
        }).then(
            function() {
                console.log('Burger has been devoured.');
                location.reload();
            }
        );    
    });
});