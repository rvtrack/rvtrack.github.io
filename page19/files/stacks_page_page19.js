
// 'stacks' is the Stacks global object.
// All of the other Stacks related Javascript will 
// be attatched to it.
var stacks = {};


// this call to jQuery gives us access to the globaal
// jQuery object. 
// 'noConflict' removes the '$' variable.
// 'true' removes the 'jQuery' variable.
// removing these globals reduces conflicts with other 
// jQuery versions that might be running on this page.
stacks.jQuery = jQuery.noConflict(true);

// Javascript for stacks_in_197_page19
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_197_page19 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_197_page19 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
/* Foundation */
$(document).ready(function() {
    var switched = false;
    var updateTables = function() {
        if (($(window).width() < 767) && !switched) {
            switched = true;
            $("#responsiveTable_stacks_in_197_page19").each(function(i, element) {
                splitTable($(element));
            });
            return true;
        } else if (switched && ($(window).width() > 767)) {
            switched = false;
            $("#responsiveTable_stacks_in_197_page19").each(function(i, element) {
                unsplitTable($(element));
            });
        }
    };

    $(window).load(updateTables);
    $(window).on("redraw", function() {
        switched = false;
        updateTables();
    }); // An event to listen for
    $(window).on("resize", updateTables);

    function splitTable(original) {
        original.wrap("<div class='table-wrapper' />");

        var copy = original.clone();
        copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
        copy.removeClass("responsiveTable");

        original.closest(".table-wrapper").append(copy);
        copy.wrap("<div class='pinned' />");
        original.wrap("<div class='scrollable' />");

        setCellHeights(original, copy);
    }

    function unsplitTable(original) {
        original.closest(".table-wrapper").find(".pinned").remove();
        original.unwrap();
        original.unwrap();
    }

    function setCellHeights(original, copy) {
        var tr = original.find('tr'),
            tr_copy = copy.find('tr'),
            heights = [];

        tr.each(function(index) {
            var self = $(this),
                tx = self.find('th, td');

            tx.each(function() {
                var height = $(this).outerHeight(true);
                heights[index] = heights[index] || 0;
                if (height > heights[index]) heights[index] = height;
            });

        });

        tr_copy.each(function(index) {
            $(this).height(heights[index]);
        });
    }

});
/* End Foundation */

$(document).ready(function() {
    
    $('#responsiveTable_stacks_in_197_page19 tr:nth-child(1)').css('font-weight', 'bold');
    
    
        $('#responsiveTable_stacks_in_197_page19 td:nth-child(1)').css('font-weight', 'bold');
    
    
});


	return stack;
})(stacks.stacks_in_197_page19);


