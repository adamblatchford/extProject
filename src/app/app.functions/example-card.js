exports.main = async (context = {}, sendResponse) => {
	const {
		propertiesToSend: { name, numberofemployees, growth1yr_employees__linkedin_,is_equiteq_sell_side_in_market_, sip___is_cancelled_on_hold, sip___is_coming_to_market, sip___is_coming_to_market__sales_opp_, sip___is_considering_a_transaction, is_deal_in_market_, is_equiteq_buy_side_target_in_market_, live_recent_transaction_, hs_lead_status, lifecyclestage,equiteq_region,type_of_company },
	} = context;
	
	try {
		const direction = growth1yr_employees__linkedin_ > 0 ? 'increase' : 'decrease';
		const Alert_is_equiteq_sell_side_in_market_ = is_equiteq_sell_side_in_market_;
		const Alert_sip___is_cancelled_on_hold_ = sip___is_cancelled_on_hold;
		const Alert_sip___is_coming_to_market = sip___is_coming_to_market;
		const Alert_sip___is_coming_to_market__sales_opp_ = sip___is_coming_to_market__sales_opp_;
		const Alert_sip___is_considering_a_transaction = sip___is_considering_a_transaction;

		const Alert_is_deal_in_market_ = is_deal_in_market_;
		const Alert_is_equiteq_buy_side_target_in_market_ = is_equiteq_buy_side_target_in_market_;
		const Alert_live_recent_transaction_ = live_recent_transaction_ =='false' ? false : true;
			
		sendResponse({
			
			title: 'This card retrieves key contact details.',
			sections: [
				...(Alert_live_recent_transaction_
					    ? [
						    {
							    type: 'alert',
							    title: 'Deal Alert!',
							    variant: 'error',
							    body: {
								    type: 'text',
								    text: live_recent_transaction_,
							    },
						    },
					    ]
					    : []),
				
				...(Alert_is_deal_in_market_
					    ? [
						    {
							    type: 'alert',
							    title: 'Deal in Market',
							    variant: 'warning',
							    body: {
								    type: 'text',
								    text: 'Company in process with a 3rd party advisor',
							    },
						    },
					    ]
					    : []),

				...(Alert_is_equiteq_buy_side_target_in_market_
					    ? [
						    {
							    type: 'alert',
							    title: 'Buy side target',
							    variant: 'warning',
							    body: {
								    type: 'text',
								    text: 'Company is a target on a Equiteq deal',
							    },
						    },
					    ]
					    : []),

				...(Alert_is_equiteq_sell_side_in_market_
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

				...(Alert_sip___is_cancelled_on_hold_
					    ? [
						    {
							    type: 'alert',
							    title: 'Equiteq Deal',
							    variant: 'warning',
							    body: {
								    type: 'text',
								    text: 'On Hold/Cancelled',
							    },
						    },
					    ]
					    : []),
				...(Alert_sip___is_coming_to_market
					    ? [
						    {
							    type: 'alert',
							    title: 'Equiteq Deal',
							    variant: 'info',
							    body: {
								    type: 'text',
								    text: 'Coming to Market (Info Prep)',
							    },
						    },
					    ]
					    : []),
				...(Alert_sip___is_coming_to_market__sales_opp_
					    ? [
						    {
							    type: 'alert',
							    title: 'Equiteq Deal',
							    variant: 'info',
							    body: {
								    type: 'text',
								    text: 'Coming to Market (Pitching)',
							    },
						    },
					    ]
					    : []),
				...(Alert_sip___is_considering_a_transaction
					    ? [
						    {
							    type: 'alert',
							    title: 'Equiteq Deal',
							    variant: 'info',
							    body: {
								    type: 'text',
								    text: 'Considering A Transaction (Early Sales Pipeline)',
							    },
						    },
					    ]
					    : []),
				{
				 "type": "tile",
				 "body": [
				
					 {
						 "type": "text",
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
								 },
								 {
									 "label": "Region",
									 "value": equiteq_region
								 },
								 {
									 "label": "Type of Company",
									 "value": type_of_company
								 },
							 ]
					 },

					 {
						 "type": "divider",
						 "distance": "large"
					 },
					 
				 ],
				}
			],
		});
	} catch (error) {
		console.error(error);
	}
};
