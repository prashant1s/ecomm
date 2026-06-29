export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-3 text-gray-600">
              {['Home', 'About', 'Cart', 'Contact'].map(link => (
                 <li key={link}><a href="#" className="hover:text-blue-600 transition">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">For Her</h3>
            <ul className="space-y-3 text-gray-600">
              {['Women Jeans', 'Tops and Shirts', 'Women Jackets', 'Heels and Flats'].map(link => (
                 <li key={link}><a href="#" className="hover:text-blue-600 transition">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">For Him</h3>
            <ul className="space-y-3 text-gray-600">
              {['Men Jeans', 'Men Shirts', 'Men Shoes', 'Men Accessories', 'Men Jackets'].map(link => (
                 <li key={link}><a href="#" className="hover:text-blue-600 transition">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get special offers and updates.</p>
            <div className="flex">
              <input type="email" placeholder="Enter Email" className="px-4 py-2 border border-gray-300 w-full focus:outline-none focus:border-blue-600" />
              <button className="bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 transition">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 StyleHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
