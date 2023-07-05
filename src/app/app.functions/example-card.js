exports.main = async (context = {}, sendResponse) => {
	const {
		propertiesToSend: { name, numberofemployees, growth1yr_employees__linkedin_,is_equiteq_sell_side_in_market_ },
	} = context;
	
	try {
		const direction = growth1yr_employees__linkedin_ > 0 ? 'increase' : 'decrease';
		const shouldIncludeAlertSection = true;
		
		sendResponse({
			
			title: 'This card retrieves key contact details.',
			sections: [
				{
				 "type": "tile",
				 "body": [
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
					
					
					 {
						 "type": "divider",
						 "distance": "small"
					 },
					 
					 {
						 "type": "text",
						 "format": "markdown",
						 "text": "**Engagement**"
					},
					 
					 {
						 "type": "progressBar",
						 "variant": "warning",
						 "valueMax": 100,
						 "value": 20,
						 "title": "Bottles",
						 "valueDescription": "20 out of 100",
						 "showPercentage": true
					 },
				 ],
				}
			],
		});
	} catch (error) {
		console.error(error);
	}
};
