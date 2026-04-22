import { useState } from "react";
import { Award, Factory, FileCheck, MapPin, PackageCheck, Send, X } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/spieces/6etXiCWjwUBnrPCxsBI5WSa8gnfrPW3rQ5NU5ysTFFKE6XCm58HM-91nPH3FMDf4jyQ1ulI7FZBDtIj1BJMhRSUrKVUMYj-fgEj_-3AsXfFRJtmgI50-oCDNQZEeLwA9ybv0uFEvNDShArJvoVLG7Pro_8hmpIA-z25iMP.jpg";
import { products } from "../data/products";

export default function EXIM() {
  const [quoteProductId, setQuoteProductId] = useState<string | null>(null);

  return (
    <div className="products-catalog-page">
      <section className="products-catalog-hero">
        <img src={heroImage} alt="Premium export spices and coconut products" className="catalog-hero-bg" />
        <div className="catalog-hero-overlay" />
        <div className="catalog-hero-content">
          <h1>Our Products</h1>
          <p>Authentic Indian spices and coconut products with premium export quality, purity, and reliable global supply support.</p>
          <div className="catalog-badges">
            <span><Award size={15} /> India’s Authentic Spice Excellence</span>
            <span><PackageCheck size={15} /> Premium Grade</span>
            <span><MapPin size={15} /> Sourced from India</span>
          </div>
        </div>
      </section>

      <section className="catalog-detailed-products">
        <div className="catalog-content-wrap">
          <div className="catalog-section-head">
            <h2>Our Products</h2>
            <p>Explore export-ready products with traceable sourcing, tested purity, and strong flavor performance for global B2B buyers.</p>
          </div>

          <div className="catalog-product-detail-grid">
            {products.map((product) => (
              <article key={product.id} className="catalog-detail-card">
                <div className="catalog-profile-top">
                  <img
                    src={product.image}
                    alt={`${product.name} export`}
                    className={`catalog-detail-image ${
                      product.id === "red-chilli"
                        ? "is-red-chilli"
                        : product.id === "coconut"
                          ? "is-coconut"
                          : ""
                    }`}
                  />
                  <div className="catalog-detail-body">
                    <div className="catalog-detail-topline">{product.category}</div>
                    <h3>{product.productTitle}</h3>
                    <p>{product.intro}</p>
                  </div>
                </div>
                <div className="catalog-detail-actions">
                  <Link className="catalog-action-link" to={`/products/${product.id}`}>View Details</Link>
                  <button type="button" className="alt" onClick={() => setQuoteProductId(product.id)}>Request Quote</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-secondary-support">
        <div className="catalog-content-wrap">
          <div className="catalog-secondary-card">
            <div>
              <div className="secondary-badge">Secondary Support</div>
              <h3>Logistics Assistance Available</h3>
              <p>
                We also support documentation and shipment coordination to ensure consistent supply and smooth movement after quality clearance.
              </p>
            </div>
            <div className="secondary-icons">
              <span><FileCheck size={17} /> Export Documents</span>
              <span><Factory size={17} /> Packing Coordination</span>
              <span><Send size={17} /> Dispatch Tracking</span>
            </div>
          </div>
        </div>
      </section>

      {quoteProductId && (
        <div className="catalog-modal-backdrop" role="dialog" aria-modal="true">
          <div className="catalog-quote-card">
            <button type="button" className="catalog-modal-close" onClick={() => setQuoteProductId(null)} aria-label="Close quote form">
              <X size={18} />
            </button>
            <h3>Request Quote</h3>
            <p>Share your requirement and our export team will respond with pricing and shipment options.</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setQuoteProductId(null);
              }}
              className="catalog-quote-form"
            >
              <div className="catalog-quote-grid">
                <input type="text" placeholder="Full Name" required />
                <input type="text" placeholder="Company Name" required />
              </div>
              <div className="catalog-quote-grid">
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <select
                value={quoteProductId}
                onChange={(event) => setQuoteProductId(event.target.value)}
                required
              >
                {products.map((product) => (
                  <option key={product.id} value={product.id}>{product.name}</option>
                ))}
              </select>
              <textarea rows={4} placeholder="Quantity, destination country, and packing preference" required />
              <button type="submit">Submit Quote Request</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
