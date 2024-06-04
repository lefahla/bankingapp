import { formatAmount } from "@/lib/utils"

 
const TotalBalanceBox = ({
        accounts = [], totalBanks , totalCurrentBalance
     }): TotalBalanceBoxProps => {
  return (

    <section className="total-balance">
        <div className="total-balance-chart">
            {/* DoughnutChat  */}
        </div>

        <div className="flex flex-col gap-6 gap-6">
          <h2 className="header-2">
            Bank Accounts: {totalBanks}
          </h2>

          <div className="flex flex-col gap-2">
            <p className="total-balance-label">
              Total Current Balance: {
                formatAmount(totalCurrentBalance)}
            </p>
              </div>
        </div>
    </section> 
  )
}

export default TotalBalanceBox