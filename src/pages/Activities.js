import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { ActivityCard } from '../ui-components/ActivityCard';
export function Activities(){
    const [response, setResponse] = useState('');

    useEffect(() => {
        async function callAPI(){
           try {
                const apiResponse = await API.get('hotelapi', '/hotel/search/DAL');
                console.log('response from Lambda REST API: ', response);
                setResponse((JSON.parse(apiResponse)));
           } catch (error) {
                console.log('error fetching data from REST API: ', error);
           } 

        }
        callAPI();
    }, []);
    if (!response) return null;
        const activites = response.products.map((activity) => <ActivityCard key={activity.productCode} title={activity.title} description={activity.description} url={activity.images[0].variants[0].url} rating={activity.reviews.combinedAverageRating}/>)
    // console.log(response.products[0].images[0].variants[0].url);
    return(
        <div>
            <h1>{response.totalCount}</h1>
            {/* <ActivityCard title={response.products[0].title} description={response.products[0].description} /> */}
            {activites}
        </div>
    )
}

