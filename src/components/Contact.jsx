import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20"> {/* Add mt-20 for top margin */}
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">Have questions or feedback? Reach out to us!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
          <p>If you have any questions regarding your orders, returns, or general inquiries, feel free to contact our customer support team.</p>
          <p className="mt-4">Email: support@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Business Inquiries</h2>
          <p>For business-related inquiries, partnerships, or collaborations, please get in touch with our business development team.</p>
          <p className="mt-4">Email: business@example.com</p>
          <p>Phone: 987-654-3210</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;