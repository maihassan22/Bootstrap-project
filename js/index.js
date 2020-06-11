

$(window).scroll(function () { 
  let sectionOffset=$("#about").offset().top; 
   let wScroll=$(window).scrollTop();

    if(wScroll>sectionOffset-50)
    {
        $("#navbar").css("backgroundColor","rgba(0,0,0,0.5)")
    }
    else
    {
        $("#navbar").css("backgroundColor","transparent");
    }
})

$("#navbar a").click(function(){

    let aHref =  $(this).attr("href");

    let sectionOffset  = $(aHref).offset().top;

    $("html,body").animate( {scrollTop:sectionOffset}, 1000);

});
