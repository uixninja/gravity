$(document).ready(function(){
    $('.checkbox input:checkbox').change(function(){
        $(this).closest('.title').parent('div').toggleClass('active');
    });

    $(".dropdown-menu a").click(function () {
        var selText = $(this).html();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    $(".menu, aside a").click(function() {
        $('aside, .container_box').toggleClass('show');
    });

    $('.datepicker_line input').datepicker({
        format: "dd-M-yy",
        autoclose: true,
        todayHighlight: true,
    });

    $(".range input").slider({ id: "slider", min: 0, max: 10, range: true, step: .1, value: [3, 7] });

    $('h2 em').click(function() {
        $(this).closest('div').toggleClass('opened');
    });
});
