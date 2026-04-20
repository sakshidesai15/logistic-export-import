import { useEffect, useMemo, useState } from "react";
import {
  Award,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Factory,
  FileCheck,
  Filter,
  Globe,
  Leaf,
  MapPin,
  PackageCheck,
  Send,
  ShieldCheck,
  X
} from "lucide-react";

import heroImage from "../assets/spieces/6etXiCWjwUBnrPCxsBI5WSa8gnfrPW3rQ5NU5ysTFFKE6XCm58HM-91nPH3FMDf4jyQ1ulI7FZBDtIj1BJMhRSUrKVUMYj-fgEj_-3AsXfFRJtmgI50-oCDNQZEeLwA9ybv0uFEvNDShArJvoVLG7Pro_8hmpIA-z25iMP.jpg";
import chilliImage from "../assets/spieces/6etXiCWjwUBnrPCxsBI5WSa8gnfrPW3rQ5NU5ysTFFKE6XCm58HM-91nPH3FMDf4jyQ1ulI7FZBDtIj1BJMhRSUrKVUMYj-fgEj_-3AsXfFRJtmgI50-oCDNQZEeLwA9ybv0uFEvNDShArJvoVLG7Pro_8hmpIA-z25iMP.jpg";
import coconutImage from "../assets/spieces/STJvq3R4Apb5uLoGPPmSIYK2PS0JZTOzIM9nb4axaTar8uk6PwoLQAec3OYlCUvGwRGqiLrC-rMvW2QfRNG9UtN35ib7rNbKfjYs5lam3OUW85igUGd4DcdbiEYQSO5CWhTPOWmVdBcfSWapI_o5wsBf4rR1C52_KIQwIA.jpg";
import spicesImage from "../assets/spieces/G0ZYH814Pv6GkccL5v0vQrpkEzgkThUyu8Js1wOYxU0KJxvtfnVQ6OBrcp5ncHIXo3I_rERgV8x5R9wP7iUxIJwD1RMErhj1asAtdrnoc6VZO8DLkCfJYEP40DtsaGnlJN036bjZcX06IugtQsvHJygah0QieG91DZtoJU.jpg";
import turmericImage from "../assets/turmeric1.jpg";
import papperImageOne from "../assets/papper1.jpg";
import papperImageTwo from "../assets/papper2.jpg";

type Product = {
  id: string;
  name: string;
  productTitle: string;
  category: string;
  image: string;
  intro: string;
  quality: string[];
  sourcingRegions: string[];
  types?: string[];
  whyBuy: string[];
  benefits: string[];
  applications: string[];
};

  export default function EXIM() {
  const categories = [
    { name: "Spices", image: spicesImage, productId: "spices" },
    { name: "Turmeric", image: turmericImage, productId: "turmeric" },
    { name: "Red Chilli", image: chilliImage, productId: "red-chilli" },
    { name: "Black Pepper", image: papperImageTwo, productId: "black-pepper" },
    { name: "Coconut", image: coconutImage, productId: "coconut" }
  ];

  const products: Product[] = [
    {
      id: "spices",
      name: "Spices",
      productTitle: "Premium Indian Spices Export",
      category: "Spices",
      image: spicesImage,
      intro:
        "We export a wide range of high-quality Indian spices known for their rich aroma, natural flavor, and purity. Our spices are sourced from trusted regions and processed under strict quality standards.",
      quality: [
        "Export-grade spices with strict quality checks",
        "Naturally grown and hygienically processed",
        "Available in whole and powdered form",
        "Cleaned, sorted, and packaged for global markets"
      ],
      sourcingRegions: ["Kerala (major spice hub)", "Karnataka", "Tamil Nadu"],
      types: ["Turmeric", "Black Pepper", "Cardamom", "Cloves", "Coriander Seeds"],
      whyBuy: [
        "Strong aroma and authentic taste",
        "Premium export quality",
        "Direct sourcing from top regions",
        "Hygienic processing and packaging",
        "Consistent quality supply",
        "Suitable for global markets"
      ],
      benefits: [
        "Rich in natural flavor and nutrients",
        "Used in food and health industries",
        "High demand in international markets"
      ],
      applications: ["Food industry", "Spice processing industries", "Export markets"]
    },
    {
      id: "turmeric",
      name: "Turmeric",
      productTitle: "Premium Turmeric Export from India",
      category: "Turmeric",
      image: turmericImage,
      intro:
        "Our export-grade turmeric is selected for color, aroma, and curcumin strength to meet global buyer specifications.",
      quality: [
        "Sorted by grade, moisture, and purity checks before shipment",
        "Organic lots available based on buyer requirement",
        "Clean processing with hygienic packing in export-safe formats"
      ],
      sourcingRegions: ["North-East India", "Assam", "Darjeeling Region"],
      whyBuy: [
        "Premium Quality Products",
        "High Curcumin Content (2% to 4%, premium lots up to 12%)",
        "Direct Sourcing from Trusted Regions",
        "Strict Quality Control",
        "Hygienic Processing and Packaging",
        "Export Standard Compliance",
        "Reliable Delivery",
        "Competitive Pricing"
      ],
      benefits: [
        "Rich in Curcumin",
        "Anti-inflammatory properties",
        "High global demand"
      ],
      applications: ["Food Industry", "Nutraceutical / Health Industry", "Export Markets"]
    },
    {
      id: "black-pepper",
      name: "Black Pepper",
      productTitle: "Premium Black Pepper Export from India",
      category: "Spices",
      image: papperImageOne,
      intro:
        "We supply uniform, bold black pepper lots with strong aroma and flavor for bulk importers and food brands.",
      quality: [
        "Available in multiple grades with density and cleanliness checks",
        "Organic and conventional options on request",
        "Processed and packed to retain aroma during transit"
      ],
      sourcingRegions: ["Kerala", "Karnataka", "Tamil Nadu"],
      whyBuy: [
        "Strong aroma and flavor",
        "Premium quality grains",
        "High export demand",
        "Strict quality checks from sourcing to packing"
      ],
      benefits: [
        "Strong aroma and flavor",
        "High-quality grains",
        "Widely used in global markets"
      ],
      applications: ["Food Industry", "Nutraceutical / Health Industry", "Export Markets"]
    },
    {
      id: "red-chilli",
      name: "Red Chilli",
      productTitle: "Premium Red Chilli Export from India",
      category: "Red Chilli",
      image: chilliImage,
      intro:
        "Our red chilli exports are curated for vibrant color value and controlled pungency for processing and culinary use.",
      quality: [
        "Grade-wise sorting with color and pungency consistency",
        "Optional steam-cleaned and machine-cleaned lots",
        "Export packing for safe handling and long-route transport"
      ],
      sourcingRegions: ["Andhra Pradesh (Guntur)", "Telangana"],
      whyBuy: [
        "Rich color and pungency",
        "Widely used globally",
        "High-quality processing",
        "Reliable export-grade packing standards"
      ],
      benefits: [
        "Strong color and pungency",
        "Used in food processing",
        "Suitable for bulk spice blends and sauces"
      ],
      applications: ["Food Industry", "Nutraceutical / Health Industry", "Export Markets"]
    },
    {
      id: "coconut",
      name: "Coconut & Coconut Products",
      productTitle: "Premium Coconut Product Export from India",
      category: "Coconut & Coconut Products",
      image: coconutImage,
      intro:
        "We export coconut-based products with stable quality, clean processing, and buyer-specific packaging options.",
      quality: [
        "Quality checks for moisture, freshness, and shelf-life parameters",
        "Organic availability for selected product lines",
        "Hygienic production and sealed packaging for export"
      ],
      sourcingRegions: ["Kerala", "Tamil Nadu", "Karnataka"],
      whyBuy: [
        "Nutrient-rich product",
        "Multiple applications (food, oil, industry)",
        "Fresh and high-quality sourcing",
        "Consistent export compliance and packaging integrity"
      ],
      benefits: [
        "Nutrient-rich",
        "Used in food, oil, and industrial products",
        "Consistent global demand"
      ],
      applications: ["Food Industry", "Nutraceutical / Health Industry", "Export Markets"]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quoteProductId, setQuoteProductId] = useState<string | null>(null);
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);
  const [focusedProductId, setFocusedProductId] = useState<string | null>(null);

  const filteredCategories = useMemo(() => {
    if (selectedCategory === "All") {
      return categories;
    }

    return categories.filter((category) => category.name === selectedCategory);
  }, [selectedCategory, categories]);

  useEffect(() => {
    if (!quoteProductId) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [quoteProductId]);

  const openCategoryDetails = (productId: string) => {
    setExpandedProductId(productId);
    setFocusedProductId(productId);
    window.requestAnimationFrame(() => {
      const target = document.getElementById(`detail-${productId}`);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    window.setTimeout(() => {
      setFocusedProductId((current) => (current === productId ? null : current));
    }, 1600);
  };

  const openQuote = (productId: string) => {
    setQuoteProductId(productId);
  };

  const closeQuote = () => {
    setQuoteProductId(null);
  };

  const toggleExpandedProduct = (productId: string) => {
    setExpandedProductId((current) => (current === productId ? null : productId));
  };

  return (
    <div className="products-catalog-page">
      <section className="products-catalog-hero">
        <img src={heroImage} alt="Premium export spices and coconut products" className="catalog-hero-bg" />
        <div className="catalog-hero-overlay" />
        <div className="catalog-hero-content">
          <h1>Our Products</h1>
          <p>Premium Quality Spices and Coconut Products for Global Export</p>
          <div className="catalog-badges">
            <span><Award size={15} /> Export Quality</span>
            <span><PackageCheck size={15} /> Premium Grade</span>
            <span><MapPin size={15} /> Sourced from India</span>
          </div>
        </div>
      </section>

      <section className="catalog-filter-bar">
        <div className="catalog-filter-wrap">
          <div className="catalog-filter-title">
            <Filter size={17} />
            <span>Category</span>
          </div>
          <div className="catalog-filter-pills">
            {["All", ...categories.map((item) => item.name)].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSelectedCategory(item)}
                className={selectedCategory === item ? "is-active" : ""}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-category-grid-section">
        <div className="catalog-content-wrap">
          <div className="catalog-section-head">
            <h2>Product Categories</h2>
            <p>Our products are the business core, while logistics remains a support layer for smooth delivery.</p>
          </div>
          <div className="catalog-category-grid">
            {filteredCategories.map((category) => (
              <article key={category.name} className="catalog-category-card">
                <img src={category.image} alt={`${category.name} export category`} />
                <div className="catalog-category-overlay" />
                <div className="catalog-category-content">
                  <h3>{category.name}</h3>
                  <button type="button" onClick={() => openCategoryDetails(category.productId)}>
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-detailed-products">
        <div className="catalog-content-wrap">
          <div className="catalog-section-head">
            <h2>Detailed Product Focus</h2>
            <p>Buyer-oriented details covering quality, origin, and end-use value.</p>
          </div>

          <div className="catalog-product-detail-grid">
            {products.map((product) => (
              <article
                id={`detail-${product.id}`}
                key={product.id}
                className={`catalog-detail-card ${expandedProductId === product.id ? "is-expanded" : ""} ${focusedProductId === product.id ? "is-focused" : ""}`}
              >
                <div className="catalog-profile-top">
                  <img src={product.image} alt={`${product.name} export`} className="catalog-detail-image" />
                  <div className="catalog-detail-body">
                    <div className="catalog-detail-topline">{product.category}</div>
                    <h3>{product.productTitle}</h3>
                    <p>{product.intro}</p>

                    <div className="catalog-mini-points">
                      <div>
                        <ShieldCheck size={16} />
                        <span>Strict quality checks</span>
                      </div>
                      <div>
                        <MapPin size={16} />
                        <span>{product.sourcingRegions.join(" | ")}</span>
                      </div>
                      <div>
                        <Globe size={16} />
                        <span>Export market ready</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`catalog-detail-expand ${expandedProductId === product.id ? "is-open" : ""}`}>
                  <div className="catalog-profile-sections">
                    {[
                      {
                        title: "Quality Details",
                        items: product.quality,
                        icon: <PackageCheck size={16} />
                      },
                      {
                        title: "Sourcing Regions",
                        items: product.sourcingRegions,
                        icon: <MapPin size={16} />
                      },
                      ...(product.types
                        ? [{
                            title: "Types of Spices",
                            items: product.types,
                            icon: <Leaf size={16} />
                          }]
                        : []),
                      {
                        title: "Why Buy This Product",
                        items: product.whyBuy,
                        icon: <Award size={16} />,
                        highlight: true
                      },
                      {
                        title: "Product Benefits",
                        items: product.benefits,
                        icon: <Leaf size={16} />
                      },
                      {
                        title: "Applications",
                        items: product.applications,
                        icon: <Globe size={16} />
                      }
                    ].map((section) => (
                      <div
                        key={`${product.id}-${section.title}`}
                        className={`catalog-profile-section ${section.highlight ? "is-highlight" : ""}`}
                      >
                        <h4>
                          <span className="catalog-section-icon">{section.icon}</span>
                          {section.title}
                        </h4>
                        <ul>
                          {section.items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="catalog-detail-actions">
                  <button type="button" onClick={() => toggleExpandedProduct(product.id)}>
                    {expandedProductId === product.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    {expandedProductId === product.id ? "Hide Details" : "View More"}
                  </button>
                  <button type="button" className="alt" onClick={() => openQuote(product.id)}>Request Quote</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-buy-reasons">
        <div className="catalog-content-wrap">
          <div className="catalog-section-head left">
            <h2>Why Buy From Us</h2>
            <p>Built for trust, consistency, and global trade performance.</p>
          </div>
          <div className="catalog-reasons-grid">
            {[
              "Premium Quality Products",
              "High Curcumin Content in Turmeric (2% to 4%, premium up to 12%)",
              "Direct Sourcing from Trusted Regions",
              "Strict Quality Control",
              "Hygienic Processing and Packaging",
              "Export Standard Compliance",
              "Reliable Delivery",
              "Competitive Pricing"
            ].map((item) => (
              <div key={item} className="catalog-reason-item">
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
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
                We also support documentation and shipment coordination so your product consignments move smoothly after production and quality clearance.
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
            <button type="button" className="catalog-modal-close" onClick={closeQuote} aria-label="Close quote form">
              <X size={18} />
            </button>
            <h3>Request Quote</h3>
            <p>Share your requirement and our export team will respond with pricing and shipment options.</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                closeQuote();
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
