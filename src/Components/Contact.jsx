import React, { useState } from 'react';
import { databases } from '../appwrite';

const Contact = () => {
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
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '+971',
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
    setFormData({ ...formData, [name]: value });
  };

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.createDocument(
        '67776f9600374cf28ae9', // Replace with your database ID
        '67776fdb00316ea91681', // Replace with your collection ID
        'unique()', // Generates a unique document ID
        formData
      );
      setSuccess(true);
      setFormData({
        name: '',
        phone: '+971',
        email: '',
        migrateCountry: '',
        nationality: '',
        dob: '',
        ageRange: '',
        education: '',
        immigrationType: '',
        preferredLocation: '',
      });
    } catch (err) {
      setError(err.message || 'Failed to submit the form.');
    }
  };

  return (
    <div className="py-20">
      <div className="text-[#14A660] font-bold text-center mb-10">
        <h1 className="text-[40px] md:text-[64px] leading-snug">
          ENQUIRY FORM
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto px-6 py-10 bg-white shadow-lg rounded-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002F97]"
          />
          <input
            type="text"
            name="phone"
            placeholder="+971"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002F97]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002F97]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <select
            name="migrateCountry"
            value={formData.migrateCountry}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002F97]"
          >
            <option value="">Migrate Country</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002F97]"
          >
           <option value="">Select Nationality</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
          </select>
          <div className="relative">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002F97]"
            />
            {!formData.dob && (
              <span className="md:hidden absolute left-3 top-2 text-gray-400">
                DD/MM/YYYY
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <select
            name="ageRange"
            value={formData.ageRange}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002F97]"
          >
            <option value="">Age Range</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
          </select>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002F97]"
          >
            <option value="">Education</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
          </select>
          <select
            name="immigrationType"
            value={formData.immigrationType}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002F97]"
          >
            <option value="">Immigration Type</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <select
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002F97]"
          >
            <option value="">Preferred Location</option>
            <option value="City A">City A</option>
            <option value="City B">City B</option>
          </select>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" name="captcha" required />
          <label>I’m not a robot</label>
        </div>

        <button
          type="submit"
          className="w-full md:w-1/4 py-2 px-4 bg-[#002F97] text-white font-bold rounded-md hover:bg-[#001d6b] focus:outline-none focus:ring-2 focus:ring-[#002F97]"
        >
          SUBMIT
        </button>
      </form>

      <div className="max-w-5xl mx-auto px-6 text-center text-[16px] md:text-[20px] leading-relaxed mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eum?
        Non quo, ad amet enim alias ullam voluptatem, soluta eligendi porro
        tempore et itaque dolore ipsa id praesentium ut? Corporis quidem fugiat
        libero adipisci modi consectetur.
      </div>
    </div>
  );
};

export default Contact;
