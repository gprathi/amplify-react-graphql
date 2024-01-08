import json
import requests

def handler(event, context):
	print('received event:')
	print(event)

  
	url = "https://api.viator.com/partner/products/search"

	payload = json.dumps({
	"filtering": {
		"destination": "732",
		"tags": [
		21972
		],
		"flags": [
		"LIKELY_TO_SELL_OUT",
		"FREE_CANCELLATION"
		],
		"lowestPrice": 5,
		"highestPrice": 500,
		"startDate": "2023-08-31",
		"endDate": "2023-09-28",
		"includeAutomaticTranslations": True,
		"confirmationType": "INSTANT",
		"durationInMinutes": {
		"from": 20,
		"to": 360
		},
		"rating": {
		"from": 3,
		"to": 5
		}
	},
	"sorting": {
		"sort": "TRAVELER_RATING",
		"order": "DESCENDING"
	},
	"pagination": {
		"start": 1,
		"count": 5
	},
	"currency": "USD"
	})
	headers = {
	'Accept-Language': 'en-US',
	'Content-Type': 'application/json',
	'Accept': 'application/json;version=2.0',
	'exp-api-key': 'e8ded8e9-45c3-4188-8a1c-2df6f2bd7456'
	}

	response = requests.request("POST", url, headers=headers, data=payload, verify=False) 

	return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(response.text)
  }