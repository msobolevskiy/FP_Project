import styled from "styled-components";
import { getIPAddress } from './utils/utils.ts';

const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
function App() {

  const sendIPAddress = async function () {
    const ip = await getIPAddress();

    if (!ip) {
      console.error('Failed to retrieve IP address');
      return;
    }

    const requestData = {
      ip_address: ip,
      userAgent: navigator.userAgent,
      language: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`
    };

    try {
      const response = await fetch('http://localhost:3001/api/collect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response from server:', responseData);
      } else {
        console.error('Failed to send IP address:', response.status);
      }
    } catch (error) {
      console.error('Error sending IP address:', error);
    }
  }


  return (
    <AppWrapper>
      "My Finger Print Project"
        <button onClick={sendIPAddress}>Click it</button>
    </AppWrapper>
  );
}

export default App;
