function Footer() {
  return (
    <>
      <div className="border-t border-myBlue grid grid-cols-2 gap-4 gap-y-8 px-3 py-5 pt-8 lg:grid-cols-4 lg:gap-8 bg-myBlue text-white">
        <div>
          <div className="text-xl font-pattaya ">About Us</div>
          <div>
            <p className="font-varela mt-3 ml-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum accumsan elit a ipsum consectetur, nec commodo erat
              commodo. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Sed tincidunt ullamcorper purus
              non mattis.
            </p>
          </div>
        </div>
        <div>
          <div className="text-xl font-pattaya ">Contact Us</div>
          <p className="font-varela mt-3 ml-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            accumsan elit a ipsum consectetur, nec commodo erat commodo.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Sed tincidunt ullamcorper purus non mattis.
          </p>
        </div>
        <div>
          <div className="text-xl font-pattaya ">Help and Support</div>
          <p className="font-varela mt-3 ml-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            accumsan elit a ipsum consectetur, nec commodo erat commodo.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Sed tincidunt ullamcorper purus non mattis.
          </p>
        </div>
        <div>
          <div className="text-xl font-pattaya ">blaa blaa</div>
          <p className="font-varela mt-3 ml-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            accumsan elit a ipsum consectetur, nec commodo erat commodo.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Sed tincidunt ullamcorper purus non mattis.
          </p>
        </div>
      </div>
      <div className="text-xs font-bold font-varela flex justify-center py-6  bg-myBlue text-white">
        {" "}
        ©MAANA SRI LANKA | All RIGHTS RESERVED
      </div>
    </>
  );
}

export default Footer;
