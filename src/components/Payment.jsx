import React, { useState } from 'react';

function Payment() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCVC, setCardCVC] = useState('');
    const [cardName, setCardName] = useState('');
    const [billingAddress, setBillingAddress] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Here you can integrate with your chosen payment gateway to process the payment
        // For demonstration purposes, let's just log the payment details to the console
        console.log('Payment Details:');
        console.log('Card Number:', cardNumber);
        console.log('Expiration Date:', cardExpiry);
        console.log('CVC:', cardCVC);
        console.log('Name on Card:', cardName);
        console.log('Billing Address:', billingAddress);

        // You can add further processing here, like displaying a confirmation message
    };

    return (
        <div style={{
            maxWidth: '600px', // Increased maxWidth
            margin: 'auto',
            padding: '40px', // Increased padding
            border: '1px solid #ccc',
            borderRadius: '5px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        }}>
            <h1>Payment Details</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <label htmlFor="card-number" style={{ marginBottom: '15px', display: 'block', textAlign: 'left' }}>Card Number:</label>
                <input
                    type="text"
                    id="card-number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Enter card number"
                    required
                    style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '3px' }}
                />
                
                <label htmlFor="card-expiry" style={{ marginBottom: '15px', display: 'block', textAlign: 'left' }}>Expiration Date:</label>
                <input
                    type="text"
                    id="card-expiry"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    placeholder="MM/YY"
                    required
                    style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '3px' }}
                />
                
                <label htmlFor="card-cvc" style={{ marginBottom: '15px', display: 'block', textAlign: 'left' }}>CVC:</label>
                <input
                    type="text"
                    id="card-cvc"
                    value={cardCVC}
                    onChange={(e) => setCardCVC(e.target.value)}
                    placeholder="Enter CVC"
                    required
                    style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '3px' }}
                />
                
                <label htmlFor="card-name" style={{ marginBottom: '15px', display: 'block', textAlign: 'left' }}>Name on Card:</label>
                <input
                    type="text"
                    id="card-name"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Enter name"
                    required
                    style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '3px' }}
                />
                
                <label htmlFor="billing-address" style={{ marginBottom: '15px', display: 'block', textAlign: 'left' }}>Billing Address:</label>
                <textarea
                    id="billing-address"
                    value={billingAddress}
                    onChange={(e) => setBillingAddress(e.target.value)}
                    placeholder="Enter billing address"
                    required
                    style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '3px' }}
                ></textarea>
                
                <button type="submit" style={{ padding: '12px 24px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Submit Payment</button>
            </form>
        </div>
    );
}

export default Payment;
