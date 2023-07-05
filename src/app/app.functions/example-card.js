exports.main = async (context = {}, sendResponse) => {
	const {
		propertiesToSend: { name, numberofemployees, growth1yr_employees__linkedin_,is_equiteq_sell_side_in_market_, hs_lead_status, lifecyclestage },
	} = context;
	
	try {
		const direction = growth1yr_employees__linkedin_ > 0 ? 'increase' : 'decrease';
		const shouldIncludeAlertSection = true;
		
		sendResponse({
			
			title: 'This card retrieves key contact details.',
			sections: [
					 ...(shouldIncludeAlertSection
					    ? [
						    {
							    type: 'alert',
							    title: 'Equiteq Deal',
							    variant: 'success',
							    body: {
								    type: 'text',
								    text: 'Live Mandate',
							    },
						    },
					    ]
					    : []),
				{
				 "type": "tile",
				 "body": [
				
					 {
						 "type": "heading",
						 "format": "markdown",
						 "text": "**Engagement**"
					 },
					 
					 {
						 "type": "descriptionList",
						 "direction": "row",
						 "items":
							 [
								 {
									 "label": "Lifecycle Stage",
									 "value": lifecyclestage
								 },
								 {
									 "label": "Lead Status",
									 "value": hs_lead_status
								 }
							 ]
					 },
					 
					 {
						 type: 'statistics',
						 items: [
						  {
							  label: 'Number Employees',
							  number: numberofemployees,
							  description: {
								  type: 'trend',
								  value: growth1yr_employees__linkedin_,
								  direction: direction,
							  }
						  },
						  
						  {
							  label: 'Number Employees',
							  number: numberofemployees,
							  description: {
								  type: 'trend',
								  value: growth1yr_employees__linkedin_,
								  direction: direction,
							  }
						  }
					  	],
					},
					
				 ],
				}
			],
		});
	} catch (error) {
		console.error(error);
	}
};
