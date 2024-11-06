const Footer = () => {
  return (
    <div className="max-w-[1280px] mx-auto py-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Gadget Heaven</h1>
        <p className="opacity-60 font-medium">
          Leading the way in cutting-edge technology and innovations.
        </p>
      </div>
      <hr className="my-8 opacity-40" />
      <div className="grid sm:grid-cols-3 md:gap-36 gap-9 text-center">
        <div>
          <h1 className="mb-4 text-lg font-bold">Service</h1>
          <ul className="opacity-60 leading-loose">
            <li>Product support</li>
            <li>Order Tracking</li>
            <li>Shipping & delivery</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-4 text-lg font-bold">Company</h1>
          <ul className="opacity-60 leading-loose">
            <li>About us</li>
            <li>Careers</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-4 text-lg font-bold">Legal</h1>
          <ul className="opacity-60 leading-loose">
            <li>Terms of services</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
