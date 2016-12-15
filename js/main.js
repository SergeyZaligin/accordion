 $(document).ready(function(){

  $(".b-accordion__content").not(":first").hide();

  $(".b-accordion__title").click(function(){
    var findContent = $(this).next(".b-accordion__content");
    var findAccordion = $(this).closest('.b-accordion');
    
    if($(this).hasClass("b-accordion__title_active")){
      $(".b-accordion__title").removeClass("b-accordion__title_active");
    }else{
      $(".b-accordion__title").removeClass("b-accordion__title_active");
      $(this).addClass("b-accordion__title_active");
    }

    
    if (findContent.is(":visible")){
      findContent.slideUp(400);

    }else{

      findAccordion.find(".b-accordion__content").slideUp(400);
      findContent.slideDown(400);
    }
  });

 });

































 // $(document).ready(function () {

  //   $('.b-accordion>.b-accordion__content').not(':first').hide();

  //   $('.b-accordion>.b-accordion__title').click(function () {

  //     var findContent = $(this).next('.b-accordion__content');
  //     var findAccordion = $(this).closest('.b-accordion');

  //     if(findContent.is(':visible')){
  //       findAccordion.slideUp(400);
  //     }else{
  //       findAccordion.find('>.b-accordion__content').slideUp(400);
  //       findContent.slideDown(400);
  //     }

  //   });



  // });
