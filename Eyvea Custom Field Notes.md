Here's the link to the page: https://bc-eyeva-docs.papathemes.com/usage/product.html#displaying-360-degree-images 

__@modifiers_modal = 1 (Sets the options modal)

__@select_modifiers = "Text For Options Window" 

__@group [Name For Title on the Window] = [Options Lists Titles that go in that window]

__countdown_label = [Name of the sale]

__countdown_date = [Date of the sale end in format: YYYY-MM-DD HH:MM:SS]

__@360 = [Need a source for the video, upload to Image Manager, [Link]]

__@tooltip Option Name = option-level tooltip text
- Adds tooltip text for the entire option label.
- Example:
	__@tooltip Storage = Choose storage based on your workload. 1TB is recommended for video editing.

__@tooltip Option Name:Value Name = value-level tooltip text
- Adds tooltip text for one specific value only.
- Example:
	__@tooltip Storage:1TB SSD = Best choice for heavy creative work.

__@tooltip_heading Option Name:Value Name = value-level tooltip heading
- Adds a heading above a value-level tooltip.
- Example:
	__@tooltip_heading Storage:1TB SSD = Recommended

Notes:
- Option Name and Value Name should match product option labels in the storefront.
- Matching is case-insensitive and tolerant of minor spacing/colon differences.
- To show these inline on the product page (not only in modal flow), set:
	__@modifiers_modal = 0