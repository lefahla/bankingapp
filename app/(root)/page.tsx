import HeaderBox from "@/components/HeaderBox";
import RighstSiseBar from "@/components/RighstSiseBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Image from "next/image";

export default function Home() {
  const loggedIn = {
      firstName: 'thabo', 
      lastName: 'nthako',
      email: 'me@namemiddlewareregex.net'
    };
  return (
  <section className="home">
    <div className="home-content">
      <header className="home-header">
        <HeaderBox 
          type="greeting"
          title="Welcome"
          loggedIn={loggedIn?.firstname  || 'Guest'}
          subtext="Access and manage your account and transactions accourdingly"
        /> 

        <TotalBalanceBox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1450.90}

        />
      </header>
      RECENT TRANSATIONS
    </div>
    <RighstSiseBar 
      user={loggedIn}
      transactions={[]}
      banks={[
        {currentBalance:190.90},{currentBalance:90.89}
      ]}
      />
  </section>  
  );
}
