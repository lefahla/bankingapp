import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Image from "next/image";

export default function Home() {
  const User = {firstname: 'thabo', lastname: 'nthako'};
  return (
  <section className="home">
    <div className="home-content">
      <header className="home-header">
        <HeaderBox 
          type="greeting"
          title="Welcome"
          user={User?.firstname || 'Guest'}
          subtext="Acess and manage your account and transactions accourdingly"
        /> 

        <TotalBalanceBox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1450.90}

        />
      </header>
    </div>
  </section>  
  );
}
