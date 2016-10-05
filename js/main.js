
  $(document).ready(function () {

    $('.b-accordion>.b-accordion__content').not(':first').hide();

    $('.b-accordion>.b-accordion__title').click(function () {

      var findContent = $(this).next('.b-accordion__content');
      var findAccordion = $(this).closest('.b-accordion');

      if(findContent.is(':visible')){
        findAccordion.slideUp(400);
      }else{
        findAccordion.find('>.b-accordion__content').slideUp(400);
        findContent.slideDown(400);
      }

    });



  });
