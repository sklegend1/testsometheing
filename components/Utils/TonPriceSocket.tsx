'use client'
import { useEffect, useState ,useContext} from 'react';

import { gunzip, strFromU8 } from 'fflate'; 
import { TonContext } from '@/app/context/tonContext';



const TonPriceSocket = () => {
    const [price, setPrice] = useState<number | null>(null);
    const {tonPrice,setTonPrice} = useContext(TonContext)
  useEffect(() => {
    // Connect to the CoinEx WebSocket API
    const ws = new WebSocket('wss://socket.coinex.com/v2/spot/');

    // Handle WebSocket connection open event
    ws.onopen = () => {
      console.log('WebSocket connection opened');

      // Subscribe to the market ticker for TON/USDT
      const subscriptionMessage = {
        "method": "state.subscribe",
        "params": {"market_list": ["TONUSDT"]},
        "id": 1
      };

      // Send the subscription message
      ws.send(JSON.stringify(subscriptionMessage));
    };

    // Handle incoming messages from the WebSocket
    ws.onmessage = (event) => {
        console.log("message")
        try{
            
        
        const fr = new FileReader();
        fr.onload = function() {
          gunzip(
            new Uint8Array((fr.result as ArrayBufferLike)),
            function(err, raw) {
              if (err) {
                console.error(err);
                return;
              }
              const data = JSON.parse(strFromU8(raw));
              console.log("raw Data : "+JSON.stringify(data))
              // Use the data variable however you wish
              if (data.method === 'state.update' ) {
                    const marketData = data.data.state_list[0];
                    if (marketData.market === 'TONUSDT') {
                 setPrice(marketData.last);
                 setTonPrice(marketData.last) // Update the price with the last traded price
                }
                }
              
            }
          );
        }
        fr.readAsArrayBuffer(event.data);


        
        
      // Check if the message is the response to our subscription
      
    }
      catch(error){
        console.error("Problem is : ",error)
      }
    };

    // Handle WebSocket connection close event
    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Handle WebSocket errors
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Clean up the WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
  <>

    {/* <div className=' text-white'>
      <h2>TON Token Price</h2>
      <p >{price ? `$${price}` : 'Loading...'}</p>
    </div> */}
    
    </>
    );
}

export default TonPriceSocket;