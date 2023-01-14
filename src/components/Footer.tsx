import "../css/components/Footer.css"

export default function Footer()
{
    return (
        <div>
          <footer className="footer">
            <img
              alt="AuctionSense logo"
              src="/images/Logo.png"
            ></img>
            <p>@2022 auctionsense.com</p>
            <p>Legal stuff | Privacy | Cookies</p>
          </footer>
        </div>
      );
}