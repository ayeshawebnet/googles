// Easy Responsive Tabs Plugin
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                activate: function(){}
            }
            //Variables
            var options = $.extend(defaults, options);            
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';

            //Events
            $(this).bind('tabactivate', function(e, currentTab) {
                if(typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list');
                $respTabs.find('ul.resp-tabs-list li').addClass('resp-tab-item');
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs');
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion');
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content').before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var innertext = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')').html();
                    $respTabs.find('.resp-accordion:eq(' + itemCount + ')').append(innertext);
                    $tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', 'tab_item-' + (count));
                    $tabItem.attr('role', 'tab');

                    //First active tab, keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode 
                    if(options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {                  
                        $respTabs.find('.resp-tab-item').first().addClass('resp-tab-active');
                        $respTabs.find('.resp-accordion').first().addClass('resp-tab-active');
                        $respTabs.find('.resp-tab-content').first().addClass('resp-tab-content-active').attr('style', 'display:block');
                    }

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content').each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
                        tabcount++;
                    });
                    count++;
                });

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {
                    var $currentTab = $(this);
                    $currentTab.click(function () {

                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active').slideUp('', function () { $(this).addClass('resp-accordion-closed'); });
                            $currentTab.removeClass('resp-tab-active');
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');
                        } else {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);
                    });
                    //Window resize function                   
                    $(window).resize(function () {
                        $respTabs.find('.resp-accordion-closed').removeAttr('style');
                    });
                });
            });
        }
    });
})(jQuery);



    $('.resp-tabs-list li').each(function(index) {
        $(this).on('click', function() {
           // Remove active class from all tabs and contents
           $('.resp-tabs-list li').removeClass('resp-tab-active');
           $('.tab-content').removeClass('resp-content-active');
     
           // Add active class to the clicked tab and corresponding content
           $(this).addClass('resp-tab-active');
           $('.tab-content').eq(index).addClass('resp-content-active');
        });
     });

     // Dummy object simulating the data from API
const userData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
};
prefillForm()
// Function to prefill the form with dummy data
function prefillForm() {
    document.getElementById('firstName').value = userData.firstName;
    document.getElementById('lastName').value = userData.lastName;
    document.getElementById('email').value = userData.email;
    document.getElementById('phone').value = userData.phone;
}

     function enableEditing() {
   const form = document.getElementById('userForm');
   const inputs = form.querySelectorAll('input');
   inputs.forEach(input => input.disabled = false);
   form.classList.add('edit-mode');
}

function saveFormData() {
   const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
   };

   console.log('Form Data:', formData);

   // Reset form to non-editable state
   const form = document.getElementById('userForm');
   const inputs = form.querySelectorAll('input');
   inputs.forEach(input => input.disabled = true);
   form.classList.remove('edit-mode');
   
   // Call a function and pass the object (replace with actual function)
   someSaveFunction(formData); 
}


function enableEditingAddress() {
    const form = document.getElementById('addressForm');
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.disabled = false);
    form.classList.add('edit-mode');
}

function saveFormAddressData() {
    const formData = {
        name: document.getElementById('name').value,
        unitStreet: document.getElementById('unitStreet').value,
        areaSector: document.getElementById('areaSector').value,
        city: document.getElementById('city').value,
        province: document.getElementById('province').value,
        country: document.getElementById('country').value,
        postalCode: document.getElementById('postalCode').value,
        phone: document.getElementById('phone').value,
    };

    console.log('Form Data:', formData);

    const form = document.getElementById('addressForm');
    const inputs = form.querySelectorAll('input'); 
    inputs.forEach(input => input.disabled = true);
    form.classList.remove('edit-mode');

    someSaveFunction(formData);
}


function enableEditingPassword() {
    const form = document.getElementById('resetForm');
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.disabled = false);
    form.classList.add('edit-mode');
}

function saveFormResetData() {
    const formData = {
        oldPassword: document.getElementById('oldPassword').value,
        newPassword: document.getElementById('newPassword').value,
        confirmPassword: document.getElementById('confirmPassword').value,
    };

    console.log('Form Data:', formData);

    const form = document.getElementById('resetForm');
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.disabled = true);
    form.classList.remove('edit-mode');

    someSaveFunction(formData);
}