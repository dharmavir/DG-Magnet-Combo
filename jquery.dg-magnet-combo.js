/*!
 * jQuery JavaScript Library v1.4.4
 * http://www.digitss.com/
 * http://blogs.digitss.com/projects/jquery-plugins/
 *
 * Uses and works with jQuery.js
 * http://jquery.com/
 * Copyright 2011, DiGiTSS
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 24 
 */
jQuery.fn.extend({
dgSmartCombo: function()
{
	$(this).data("dgVal",[]);
	$(this).click( function()
	{
		//alert($(this).data("dgVal"));
		var oVal	=	$(this).data("dgVal") || [];
		var nVal	=	$(this).val();
		var newVal	=	null;

		if($.dg_in_array(nVal,oVal) == false)
		{
			oVal[oVal.length]	=	nVal;
			newVal	=	oVal;
		}
		else
		{
			newVal	=	$.dg_out_array(nVal,oVal);
		}
		$(this).data("dgVal",newVal);
		$(this).val(newVal);
		return false;
	});
	$(this).keyup( function(e) {
		if(!(e.which >= 37 && e.which <= 40))
		{
			$(this).click();
		}
		else
		{
			$(this).val($(this).data("dgVal"));
		}
		return false;
	})
	
}
});
jQuery.extend({
// Check for element's existance in array
dg_in_array: function(val, set){
	var key = ''; 
	try
	{
		if(set.length > 0)
		{
			for (key in set)
			{
				if (set[key].toString() == val.toString())
				{
					return true;
				}
			}
		}
	}
	catch(e) {}
    return false;
},
// Remove element from array
dg_out_array: function(val, set){
	var key = ''; 
	var nset = [];
	try
	{
		if(set.length > 0)
		{
			for (key in set)
			{
				if (set[key].toString() != val.toString())
				{
					nset[nset.length] = set[key]
				}
			}
		}
	}
	catch(e) {}
	return nset;
}
});