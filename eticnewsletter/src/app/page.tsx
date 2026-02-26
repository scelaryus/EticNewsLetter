export default function Home() {
  return (
    <div
      style={{
        margin: 0,
        backgroundColor: "#cccccc",
        paddingBottom: "60px",
        width: "100%",
      }}
    >
      <center>
        <table
          width="100%"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            fontFamily: "Arial, sans-serif",
            color: "#171a1b",
            borderSpacing: 0,
          }}
        >
          <tbody>
            {/* Top border */}
            <tr>
              <td height="6" style={{ backgroundColor: "#171a1b" }} />
            </tr>

            {/* Header */}
            <tr>
              <td style={{ padding: "20px 30px" }}>
                <table width="100%">
                  <tbody>
                    <tr>
                      {/* Logo */}
                      <td align="left">
                        <a href="https://etic-club.net/">
                          <img
                            src="/images/logo-etic.png"
                            alt="ETIC Logo"
                            width="90"
                            style={{ display: "block", border: 0 }}
                          />
                        </a>
                      </td>

                      {/* Social icons */}
                      <td align="right">
                        <a href="https://www.facebook.com/ETIC.Club/">
                          <img
                            src="/images/facebook.png"
                            width="24"
                            style={{ marginLeft: "6px" }}
                          />
                        </a>
                        <a href="https://www.instagram.com/etic_club/">
                          <img
                            src="/images/instagram.png"
                            width="24"
                            style={{ marginLeft: "6px" }}
                          />
                        </a>
                        <a href="https://www.linkedin.com/company/etic-club/">
                          <img
                            src="/images/linkedin.png"
                            width="24"
                            style={{ marginLeft: "6px" }}
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Hero section */}
            <tr>
              <td
                style={{
                  backgroundColor: "#171a1b",
                  color: "white",
                  textAlign: "center",
                  padding: "50px 30px",
                }}
              >
                <h1
                  style={{
                    margin: "0 0 15px",
                    fontSize: "26px",
                    fontWeight: "bold",
                  }}
                >
                  Welcome to ETIC Newsletter
                </h1>

                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    lineHeight: 1.6,
                  }}
                >
                  Stay updated with our latest events, opportunities and tech
                  news.
                </p>
              </td>
            </tr>

            {/* Main content */}
            <tr>
              <td
                style={{
                  padding: "40px 30px",
                  textAlign: "center",
                  backgroundColor: "#f8f7f7",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 15px",
                    fontSize: "22px",
                    color: "#171a1b",
                  }}
                >
                  Discover what’s new at ETIC
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.6,
                    margin: "0 0 25px",
                  }}
                >
                  Join our upcoming events, explore workshops, and connect with
                  students passionate about technology and innovation.
                </p>

                {/* CTA Button */}
                <a
                  href="https://etic-club.net/"
                  style={{
                    backgroundColor: "#171a1b",
                    color: "white",
                    textDecoration: "none",
                    padding: "14px 28px",
                    borderRadius: "4px",
                    display: "inline-block",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Visit our website
                </a>
              </td>
            </tr>

            {/* Footer */}
            <tr>
              <td
                style={{
                  backgroundColor: "#333333",
                  padding: "30px",
                  textAlign: "center",
                  color: "white",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                <strong>ETIC Club</strong>
                <br />
                Empowering students through technology.
                <br />
                <br />

                <a
                  href="https://etic-club.net/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  etic-club.net
                </a>

                <br />
                <br />

                {/* Social icons */}
                <table align="center" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td style={{ padding: "0 5px" }}>
                        <a href="https://www.linkedin.com/company/etic-club/">
                          <img
                            src="/images/linkedin.png"
                            width="25"
                            style={{ display: "block", border: 0 }}
                          />
                        </a>
                      </td>
                      <td style={{ padding: "0 5px" }}>
                        <a href="https://www.instagram.com/etic_club/">
                          <img
                            src="/images/instagram.png"
                            width="25"
                            style={{ display: "block", border: 0 }}
                          />
                        </a>
                      </td>
                      <td style={{ padding: "0 5px" }}>
                        <a href="https://www.facebook.com/ETIC.Club/">
                          <img
                            src="/images/facebook.png"
                            width="25"
                            style={{ display: "block", border: 0 }}
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <small>
                  © 2025 ETIC Club. All rights reserved.
                  <br />
                  <a
                    href="#"
                    style={{ color: "#bbbbbb", textDecoration: "none" }}
                  >
                    Unsubscribe
                  </a>
                </small>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

