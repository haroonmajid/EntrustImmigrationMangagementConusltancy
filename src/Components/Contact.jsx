import React, { useState } from 'react';
import { databases } from '../appwrite';
import { ID } from "appwrite";
import { Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./Contact.css"
import ReCAPTCHA from "react-google-recaptcha";



const Contact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const onChange = () =>{

  }
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsPopupVisible(true);

    formData.append("access_key", "00b0b9bb-4105-4cea-8e5c-a4ee790d5051",);

    const object = Object.fromEntries(formData,phone);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    setFormData({
      name: '',
      phone: '',
      email: '',
      migrateCountry: '',
      nationality: '',
      dob: '',
      ageRange: '',
      education: '',
      immigrationType: '',
      preferredLocation: '',
    });
    setPhone('');
  };
  const closePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };
  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia',
    'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
    'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
    'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic',
    'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 'Costa Rica', 'Croatia', 'Cuba',
    'Cyprus', 'Czechia (Czech Republic)', 'DR Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini (fmr. "Swaziland")',
    'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada',
    'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia',
    'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
    'Korea North', 'Korea South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia',
    'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali',
    'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia',
    'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (formerly Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
    'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama',
    'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia',
    'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
    'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
    'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan',
    'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo',
    'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela',
    'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  const [phone, setPhone] = useState('');
  const customStyles = {
    container: {
      width: "100%",
      // border: "2px solid #E5E7EB ",

      // margin: "20px auto",
    },
    input: {
      padding: "20px 0",
      paddingLeft:"45px",
      fontSize: "16px",
      // marginLeft:"40px",
      width:"100%",
      borderRight:"1px solid #E5E7EB",

    },
    dropdown: {
      border:"none",
    },
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    migrateCountry: '',
    nationality: '',
    dob: '',
    ageRange: '',
    education: '',
    immigrationType: '',
    preferredLocation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSubmit = { ...formData, phone };
      await databases.createDocument(
        '67776f9600374cf28ae9', // Replace with your database ID
        '67776fdb00316ea91681', // Replace with your collection ID
        ID.unique(), // Unique document ID
        formData
      );
      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        migrateCountry: '',
        nationality: '',
        dob: '',
        ageRange: '',
        education: '',
        immigrationType: '',
        preferredLocation: '',
      });
      setPhone('');
    } catch (err) {
      setError(err.message || 'Failed to submit the form.');
    }
  };
  const placeholderStyle = {
    color: 'rgba(0, 0, 0, 0.5)', // Low opacity for placeholder text
  };
  const fetchData = async () => {
    try {
      const response = await databases.listDocuments("your_database_id", "your_collection_id");
      console.log(response.documents);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  

  return (
    <div className="pb-[20px]">
      <div className="text-white h-[110vh] md:h-[90vh] hero1 flex flex-col pt-[15%] md:pt-[10%] font-bold text-left">
        <h1 className="w-[95%] text-[#01319f] hero1-heading md:w-[70%] mx-auto text-[30px] md:text-[52px] leading-snug">
        Welcome To
        <br />
          <h1 className='md:py-10'><span className='text-[38px] entrust-name md:text-[48px]'>  Entrust Immigration Management Consultancy  </span><br /><span className='text-[30px] md:text-[32px]'> Your Trusted Partner For Global Mobility & Immigration Services. </span> </h1>
        </h1>
        <div className="md:w-[70%] w-[95%] mx-auto text-left text-[18px] md:text-[18px] leading-relaxed text-[#01319f]">
      At <span className='text-[#14A660] font-bold text-[2px]'> Entrust</span>, we simplify the complexities of immigration, empowering individuals & <br /> businesses to realize their global aspirations with confidence & ease.
      </div>
      </div>
      <form   
        action='./'
        onSubmit={onSubmit}
        className="max-w-5xl form-input mx-auto mt-20 px-6 py-20 bg-white border-t-2 border-t-gray-200  shadow-2xl rounded-md"
      >
        <div className="grid grid-cols-1 md:w-full md:grid-cols-3 gap-4 mb-6">
        <div className='input-wrapper'>
        <input
            type="text"
            name="name"
            // placeholder=""
            value={formData.name}
            onChange={handleChange}
            required
            className={ `floating-input w-full px-4 py-0 h-11 border bg-transparent rounded-md outline-none focus:border-[#01319f] focus:ring-2 focus:ring-[#01319f] transition duration-200 ${
              formData.name ? "has-value" : ""
            }`}
           
          />
        <label className="floating-label">Name <span className='text-red-700'>*</span></label>
        </div>

         <div style={customStyles.container}>
      <PhoneInput
        country={"us"}
        value={phone}
        required
        onChange={setPhone}
        inputStyle={customStyles.input}
        buttonStyle={customStyles.dropdown}
        dropdownStyle={customStyles.dropdown}
        className="focus:border-[#01319f] focus:ring-2 focus:ring-[#01319f]"
        // enableSearch
      />
    </div>
          <div className='input-wrapper'>
          <input
            type="email"
            name="email"
            // placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`floating-input w-full px-4 py-0 h-11 border rounded-md outline-none focus:border-[#01319f] focus:ring-2 focus:ring-[#01319f] transition duration-200 ${
            formData.email ? "has-value" : ""
          }`
            }
          />
        <label className="floating-label">Email<span className='text-red-700'> *</span></label>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className='input-wrapper'>
          <select
            name="migrateCountry"
            value={formData.migrateCountry}
            onChange={handleChange}
            className={`floating-input w-full px-4 py-5 bg-transparent h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01319F] text-rgba(0, 0, 0, 0.5) ${
              formData.migrateCountry ? "has-value" : ""
            }`}
          >
            <option value=""selected disabled></option>
            <option value="Canada">Canada</option>
            <option value="Europe">Europe</option>
            <option value="UnitedKingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="UnitedStates">United States Of America</option>
          </select>
          <label className="floating-label">Migrate Country</label>
          </div>

          <div className='input-wrapper'>
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className={`floating-input w-full bg-transparent px-4 py-0 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01319F] ${
              formData.nationality ? "has-value" : ""
            }`}
          >
            <option value="" selected></option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <label className="floating-label">Nationality</label>
          </div>
          <div className="input-wrapper">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
             
              className={`floating-input w-full px-4 py-0 h-10 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01319f] ${
                formData.dob ? "has-value" : ""
              }`}
            />
            {!formData.dob && (
              <label className="floating-label md:hidden absolute left-3 top-2 text-gray-400">
                Date Of Birth
                              </label>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className='input-wrapper'>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
        
            className={`floating-input w-full px-4 bg-transparent py-0 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01319F] text-rgba(0, 0, 0, 0.5) ${
              formData.education ? "has-value" : ""
            }`}
          >
            <option value=""selected disabled></option>
            <option value="Canada">Intermediate</option>
            <option value="Europe">Bachelor's</option>
            <option value="UnitedKingdom">Master</option>
            </select>
          <label className="floating-label">Education</label>
          </div>
          <div className='input-wrapper'>
          <select
            name="immigrationType"
            value={formData.immigrationType}
            onChange={handleChange}
            className={`floating-input w-full px-4 bg-transparent py-0 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01319F] text-rgba(0, 0, 0, 0.5) ${
              formData.immigrationType ? "has-value" : ""
            }`}
          >
            <option value=""selected disabled></option>
            <option value="Canada">Study</option>
            <option value="Europe">Work</option>
            </select>
          <label className="floating-label">Immigration Type</label>
          </div>
          <div className='input-wrapper'>
          <select
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            className={`floating-input w-full px-4 bg-transparent py-0 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01319F] text-rgba(0, 0, 0, 0.5) ${
              formData.preferredLocation ? "has-value" : ""
            }`}
          >
            <option value=""selected disabled></option>
            <option value="Canada">City A</option>
            <option value="Europe">City B</option>
            </select>
          <label className="floating-label">Preferrd Location</label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          
        </div>

        <div className="flex justify-between gap-2 mb-6">
        <ReCAPTCHA
    sitekey="6Le4BMoqAAAAAIBt6QEUKewj_KGnC_XNDMOZl_8H"
    onChange={onChange}
  />       <div className='text-center flex items-center'>

  <Button type="submit"
    variant="primary"
    className=" bg-[#01319f] py-2 px-28 text-white font-bold rounded-md hover:bg-[#14A660] focus:outline-none focus:ring-2 focus:ring-[#01319f]">Submit
  </Button>
</div>
        </div>
        
      </form>
      <div className="max-w-5xl mx-auto px-6 text-center text-[18px] md:text-[18px] leading-relaxed mt-10">
      At <span className='text-[#14A660] font-bold text-[22px]'> Entrust</span>, we simplify the complexities of immigration, empowering individuals & businesses to realize their global aspirations with confidence & ease.
      </div>
      {isPopupVisible && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            textAlign: "center",
          }}
        >
          <h2 className='py-11'>Thank you for your submission!</h2>
          <button
            onClick={closePopup}
            style={{
              padding: "10px 20px",
              backgroundColor:"#01319f",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}


    </div>
  );
};

export default Contact;
