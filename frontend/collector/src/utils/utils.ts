export const getIPAddress = async (): Promise<string | null> => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
            throw new Error(`Failed to fetch IP address: ${response.status}`);
        }

        const data: { ip: string } = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return null;
    }
}