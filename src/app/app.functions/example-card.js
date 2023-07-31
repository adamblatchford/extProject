exports.main = async (context = {}, sendResponse) => {
	const {
		propertiesToSend: { name, numberofemployees, growth1yr_employees__linkedin_,advisory_client,is_equiteq_sell_side_in_market_, sip___is_cancelled_on_hold, sip___is_coming_to_market, sip___is_coming_to_market__sales_opp_, sip___is_considering_a_transaction, is_deal_in_market_, lead_sell_side_advisor__text_, is_equiteq_buy_side_target_in_market_, live_recent_transaction_, transaction__as_target__equiteq_advised__, hs_lead_status, lifecyclestage,equiteq_region,type_of_company, rolling_list_of_conversions },
	} = context;
	
	try {
		const direction = growth1yr_employees__linkedin_ > 0 ? 'increase' : 'decrease';
		const Alert_advisory_client = advisory_client =='true' ? true : false 
		const Alert_is_equiteq_sell_side_in_market_ = is_equiteq_sell_side_in_market_ =='true' ? true : false 
		const Alert_sip___is_cancelled_on_hold_ = sip___is_cancelled_on_hold =='true' ? true : false;;
		const Alert_sip___is_coming_to_market = sip___is_coming_to_market =='true' ? true : false;
		const Alert_sip___is_coming_to_market__sales_opp_ = sip___is_coming_to_market__sales_opp_ =='true' ? true : false;
		const Alert_sip___is_considering_a_transaction = sip___is_considering_a_transaction =='true' ? true : false;
		const Alert_transaction__as_target__equiteq_advised__ = transaction__as_target__equiteq_advised__ =='true' ? true : false;

		const Alert_is_deal_in_market_ = is_deal_in_market_ =='true' ? true : false;
		const Alert_is_equiteq_buy_side_target_in_market_ = is_equiteq_buy_side_target_in_market_ =='true' ? true : false;
		const Alert_live_recent_transaction_ = live_recent_transaction_ =='true' ? true : false;

		const friendly_lifecyclestage = lifecyclestage == "65401112" ? "Nurture" : lifecyclestage

	

		const advisorstring2 = lead_sell_side_advisor__text_ == null ? "(unknown advisor)" : lead_sell_side_advisor__text_;
		const advisorstring1 = "Company in process with a 3rd party advisor: ";

		var advisorstring  = advisorstring1.concat(advisorstring2);

		let rlc = rolling_list_of_conversions.replace(/\n/g, "  \n");
		
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
								    text: 'Company has recently transacted',
							    },
						    },
					    ]
					    : []),

					...(Alert_transaction__as_target__equiteq_advised__
					    ? [
						    {
							    type: 'alert',
							    title: 'Equiteq Deal!',
							    variant: 'error',
							    body: {
								    type: 'text',
								    text: 'Transaction advised by Equiteq',
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
								    text: advisorstring,
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
				...(Alert_advisory_client
					    ? [
						    {
							    type: 'alert',
							    title: 'Advisory Client',
							    variant: 'info',
							    body: {
								    type: 'text',
								    text: 'Active/Historical Advisory Client',
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
									 "value": friendly_lifecyclestage
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
						 "type": "text",
						 "format": "markdown",
						 "text": "**Forms**"
					 },

					  {
						 "type": "text",
						 "format": "markdown",
						 "text": "`" + rlc + "`"
					 },
					 
					 {
						 "type": "descriptionList",
						 "direction": "column",
						 "items":
							 [

								  {
									 "label": "Form Conversions",
									 "value": rolling_list_of_conversions
								 },
							 ]
					 },

				 ],
				}
			],
		});
	} catch (error) {
		console.error(error);
	}
};
