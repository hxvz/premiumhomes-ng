function AttachPackage()
{
	this.customerID = $('#customerpackage-customer_id');
	this.packageID = $('#customerpackage-package_id');
}

AttachPackage.prototype.makeAjaxRequest = function(config, ajaxCompleted, ajaxFailed)
{
	$.ajax({
		type: config.type,
		data: {source: config.source, package : this.packageID.val(), customer: this.customerID.val()},
		success: ajaxCompleted,
		fail: ajaxFailed,
	});
}

AttachPackage.prototype.previewProductAttachment = function()
{
	this.makeAjaxRequest({type:'post',source:'preview'}, ajaxCompleted, ajaxFailed);
	function ajaxCompleted(data)
	{
		console.log(data.package.cost);

		if (data.customer == undefined || data.package == undefined)
			return console.log("No record found.");
		
		var $customerName = $('.customer-name').text(data.customer.last_name + " " + data.customer.other_names);
		var $formNumber = $('.form-number').text(data.customer.form_number);
		var $gender = $('.gender').text(data.customer.gender);
		var $occupation = $('.occupation').text(data.customer.occupation);
		var $phoneNumber = $('.phone-number').text(data.customer.phone_number);
		var $emailAddress = $('.email-address').text(data.customer.email_address);
		var $customerImage = $('.customer-img').text(data.customer.image);
		var $productImage = $('.product-img').prop('src', data.package.image);
		var $productTitle = $('.product-title').text(data.package.title);
		var $productCost = $('.product-cost').text(data.package.cost);
	}

	function ajaxFailed()
	{

	}
}

AttachPackage.prototype.confirmProductAttachment = function()
{
	this.makeAjaxRequest({type:'post',source:'confirm'}, ajaxCompleted, ajaxFailed);
	function ajaxCompleted(data)
	{

	}
	function ajaxFailed()
	{

	}
}