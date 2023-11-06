import {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query';
import React from 'react';


const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({Component, pageProps}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}

export default App;