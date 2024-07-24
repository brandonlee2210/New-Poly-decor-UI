import { Link } from "react-router-dom";
import axios from "axios";

import React, { useState, useEffect } from "react";

const ListCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/categories"
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const list = [
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                <g id="Group_412" data-name="Group 412" transform="translate(9791 1536)">
                    <g id="Rectangle_1195" data-name="Rectangle 1195" transform="translate(-9791 -1536)" fill="#ddb671" stroke="#ddb671" stroke-width="1">
                    <rect width="64" height="64" rx="8" stroke="none"/>
                    <rect x="0.5" y="0.5" width="63" height="63" rx="7.5" fill="none"/>
                    </g>
                    <g id="Group_385" data-name="Group 385" transform="translate(-9781 -1521)">
                    <rect id="Rectangle_1179" data-name="Rectangle 1179" width="43.058" height="9.431" transform="translate(0 22.831)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    <line id="Line_60" data-name="Line 60" y1="2.143" transform="translate(6.526 32.262)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                    <line id="Line_61" data-name="Line 61" y1="2.143" transform="translate(36.676 32.262)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                    <line id="Line_62" data-name="Line 62" y1="3.945" transform="translate(21.529 18.544)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                    <line id="Line_63" data-name="Line 63" x2="3.906" transform="translate(8.812 27.547)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                    <line id="Line_64" data-name="Line 64" x2="3.906" transform="translate(29.96 27.547)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                    <rect id="Rectangle_1180" data-name="Rectangle 1180" width="33.532" height="18.544" transform="translate(4.858 0)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    <line id="Line_65" data-name="Line 65" x2="9.447" transform="translate(16.846 22.49)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                    </g>
                </g>
                </svg>
                `,
      title: "Nội Thất<br>Phòng Khách",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="Group_411" data-name="Group 411" transform="translate(9620 1536)">
    <g id="Rectangle_1195" data-name="Rectangle 1195" transform="translate(-9620 -1536)" fill="#ddb671" stroke="#ddb671" stroke-width="1">
      <rect width="64" height="64" rx="8" stroke="none"/>
      <rect x="0.5" y="0.5" width="63" height="63" rx="7.5" fill="none"/>
    </g>
    <g id="Group_386" data-name="Group 386" transform="translate(-9613 -1519)">
      <path id="Path_413" data-name="Path 413" d="M-1720.662-340.235l2.135,17.732-.771,11.624" transform="translate(1720.663 340.235)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_66" data-name="Line 66" x2="10.956" transform="translate(2.135 17.732)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_414" data-name="Path 414" d="M-1688.445-278.778c0-.742-.8-11.624-.8-11.624" transform="translate(1700.425 308.134)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_415" data-name="Path 415" d="M-1708.024-319.981s.267-3.054-2.224-3.054h-5.248l-1.245-11.95a1.558,1.558,0,0,0-1.482-1.334h-1.968" transform="translate(1720.359 337.712)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_416" data-name="Path 416" d="M-1585.172-340.235l-2.135,17.732.771,11.624" transform="translate(1634.758 340.235)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_67" data-name="Line 67" x1="10.956" transform="translate(36.494 17.732)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_417" data-name="Path 417" d="M-1614.974-278.778c0-.742.8-11.624.8-11.624" transform="translate(1652.58 308.134)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_418" data-name="Path 418" d="M-1615.989-319.981s-.267-3.054,2.224-3.054h5.248l1.245-11.95a1.558,1.558,0,0,1,1.483-1.334h1.967" transform="translate(1653.24 337.712)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_68" data-name="Line 68" y1="20.341" transform="translate(17.317 9.014)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_69" data-name="Line 69" y1="20.341" transform="translate(31.312 9.014)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_70" data-name="Line 70" x2="20.163" transform="translate(14.055 9.014)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    </g>
  </g>
</svg>
`,
      title: "Nội Thất<br>Phòng Ăn",
      url: "category/1",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="Group_410" data-name="Group 410" transform="translate(9449 1536)">
    <g id="Rectangle_1195" data-name="Rectangle 1195" transform="translate(-9449 -1536)" fill="#ddb671" stroke="#ddb671" stroke-width="1">
      <rect width="64" height="64" rx="8" stroke="none"/>
      <rect x="0.5" y="0.5" width="63" height="63" rx="7.5" fill="none"/>
    </g>
    <g id="Group_384" data-name="Group 384" transform="translate(-9436 -1520)">
      <path id="Path_426" data-name="Path 426" d="M-2065.679-318.016l-7.268-14.242v-6.28a1.007,1.007,0,0,0-1.008-1.008h-22.134a1.007,1.007,0,0,0-1.008,1.008v6.232l-7.315,14.289" transform="translate(2104.411 339.545)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_101" data-name="Line 101" x1="1.6" transform="translate(7.316 7.287)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_102" data-name="Line 102" x1="1.6" transform="translate(29.852 7.287)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <rect id="Rectangle_1185" data-name="Rectangle 1185" width="10.161" height="6.732" rx="2.39" transform="translate(8.915 3.937)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <rect id="Rectangle_1186" data-name="Rectangle 1186" width="10.161" height="6.732" rx="2.39" transform="translate(19.751 3.937)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_104" data-name="Line 104" x2="38.732" transform="translate(0 21.529)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <rect id="Rectangle_1187" data-name="Rectangle 1187" width="38.732" height="8.764" transform="translate(0 21.529)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_105" data-name="Line 105" y1="2.072" transform="translate(36.5 30.234)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_106" data-name="Line 106" y1="2.072" transform="translate(2.126 30.293)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    </g>
  </g>
</svg>
`,
      title: "Nội Thất<br>Phòng Ngủ",
      url: "category/1",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="Group_406" data-name="Group 406" transform="translate(9278 1536)">
    <g id="Rectangle_1195" data-name="Rectangle 1195" transform="translate(-9278 -1536)" fill="#ddb671" stroke="#ddb671" stroke-width="1">
      <rect width="64" height="64" rx="8" stroke="none"/>
      <rect x="0.5" y="0.5" width="63" height="63" rx="7.5" fill="none"/>
    </g>
    <g id="Group_387" data-name="Group 387" transform="translate(-9267 -1521)">
      <path id="Path_419" data-name="Path 419" d="M-1491.752-288.7v-19.529H-1533v19.052h15.242l.048-19.052" transform="translate(1533 321.737)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_71" data-name="Line 71" x2="15.265" transform="translate(0 22.888)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_72" data-name="Line 72" x2="4.287" transform="translate(5.489 16.886)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_73" data-name="Line 73" x2="4.287" transform="translate(5.489 26.507)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <rect id="Rectangle_1181" data-name="Rectangle 1181" width="6.764" height="13.765" transform="translate(31.58 18.933)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_74" data-name="Line 74" x2="1.286" transform="translate(34.437 28.698)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_75" data-name="Line 75" y1="3.334" transform="translate(24.542 10.17)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <rect id="Rectangle_1182" data-name="Rectangle 1182" width="18.553" height="10.145" transform="translate(15.265 0)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    </g>
  </g>
</svg>
`,
      title: "Nội Thất<br>Phòng Làm Việc",
      url: "category/1",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="Group_407" data-name="Group 407" transform="translate(9107 1536)">
    <g id="Rectangle_1195" data-name="Rectangle 1195" transform="translate(-9107 -1536)" fill="#ddb671" stroke="#ddb671" stroke-width="1">
      <rect width="64" height="64" rx="8" stroke="none"/>
      <rect x="0.5" y="0.5" width="63" height="63" rx="7.5" fill="none"/>
    </g>
    <g id="Group_388" data-name="Group 388" transform="translate(-9094 -1523)">
      <path id="Path_420" data-name="Path 420" d="M-1355.75-347.777v36.184h23.815" transform="translate(1355.75 347.777)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_76" data-name="Line 76" y1="28.978" transform="translate(23.816 8.92)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_77" data-name="Line 77" y1="28.978" transform="translate(31.914 8.92)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_78" data-name="Line 78" y1="27.392" transform="translate(38.867 8.92)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_79" data-name="Line 79" x2="6.954" transform="translate(31.914 36.184)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_80" data-name="Line 80" x2="38.867" transform="translate(0.001 8.92)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_81" data-name="Line 81" x2="6.954" transform="translate(31.914 15.068)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_83" data-name="Line 83" x2="8.097" transform="translate(23.816 17.592)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_84" data-name="Line 84" x2="8.097" transform="translate(23.816 25.419)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_85" data-name="Line 85" x2="8.097" transform="translate(23.816 33.231)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_86" data-name="Line 86" x2="6.954" transform="translate(31.914 28.801)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_87" data-name="Line 87" x2="23.815" transform="translate(0.001 14.968)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_88" data-name="Line 88" x2="23.815" transform="translate(0.001 29.849)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_421" data-name="Path 421" d="M-1349.269-334.893s-.05-6.481-6.481-6.481" transform="translate(1355.75 343.814)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_422" data-name="Path 422" d="M-1349.269-279.971s-.05-6.48-6.481-6.48" transform="translate(1355.75 309.819)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_89" data-name="Line 89" y1="1.715" transform="translate(3.811 36.184)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_90" data-name="Line 90" y1="1.715" transform="translate(35.771 36.184)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    </g>
  </g>
</svg>
`,
      title: "Nội Thất<br>Trẻ Em",
      url: "category/1",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="Group_408" data-name="Group 408" transform="translate(8765 1536)">
    <g id="Rectangle_1195" data-name="Rectangle 1195" transform="translate(-8765 -1536)" fill="#ddb671" stroke="#ddb671" stroke-width="1">
      <rect width="64" height="64" rx="8" stroke="none"/>
      <rect x="0.5" y="0.5" width="63" height="63" rx="7.5" fill="none"/>
    </g>
    <g id="Group_390" data-name="Group 390" transform="translate(465.218 605.44)">
      <path id="Path_424" data-name="Path 424" d="M-1013.25-291.921h42.106V-300.4l-5.906-11.146h-30.388l-5.811,10.86Z" transform="translate(-8205.968 -1803.226)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_94" data-name="Line 94" y1="2.072" transform="translate(-9178.279 -2095.147)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_95" data-name="Line 95" y1="2.072" transform="translate(-9217.916 -2095.147)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_425" data-name="Path 425" d="M-966.678-328.876l-2.048-3.382v-6.28a1.007,1.007,0,0,0-1.008-1.008h-22.134a1.007,1.007,0,0,0-1.007,1.008v6.232l-2,3.429" transform="translate(-8217.341 -1785.895)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_96" data-name="Line 96" x1="1.6" transform="translate(-9210.215 -2118.153)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_97" data-name="Line 97" x1="1.6" transform="translate(-9187.679 -2118.153)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <rect id="Rectangle_1183" data-name="Rectangle 1183" width="10.161" height="6.732" rx="2.39" transform="translate(-9208.615 -2121.503)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <rect id="Rectangle_1184" data-name="Rectangle 1184" width="10.161" height="6.732" rx="2.39" transform="translate(-9197.78 -2121.503)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_98" data-name="Line 98" x2="10.451" transform="translate(-9210.648 -2110.127)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_99" data-name="Line 99" x2="10.451" transform="translate(-9196.042 -2106.88)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_100" data-name="Line 100" x2="10.451" transform="translate(-9203.68 -2099.872)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    </g>
  </g>
</svg>
`,
      title: "Chăn Ga<br>Gối Đệm",
      url: "category/1",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="Group_409" data-name="Group 409" transform="translate(8936 1536)">
    <g id="Rectangle_1195" data-name="Rectangle 1195" transform="translate(-8936 -1536)" fill="#ddb671" stroke="#ddb671" stroke-width="1">
      <rect width="64" height="64" rx="8" stroke="none"/>
      <rect x="0.5" y="0.5" width="63" height="63" rx="7.5" fill="none"/>
    </g>
    <g id="Group_389" data-name="Group 389" transform="translate(-8920 -1523)">
      <line id="Line_91" data-name="Line 91" x2="9.431" transform="translate(18.503 38.009)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_92" data-name="Line 92" y2="21.624" transform="translate(23.218 16.385)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_423" data-name="Path 423" d="M-1128.35-353.319h5.859l2.858,16.385h-17.338l3.048-16.385Z" transform="translate(1151.568 353.319)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_93" data-name="Line 93" y2="5.684" transform="translate(27.934 16.385)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <ellipse id="Ellipse_83" data-name="Ellipse 83" cx="0.5" cy="0.5" rx="0.5" ry="0.5" transform="translate(27.434 22.053)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_427" data-name="Path 427" d="M-1175.279-295.644h15.8s-.742-7.716-7.9-7.716S-1175.279-295.644-1175.279-295.644Z" transform="translate(1175.279 322.397)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line id="Line_103" data-name="Line 103" y2="9.2" transform="translate(7.901 8.056)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_428" data-name="Path 428" d="M-1157.95-306.134v-.556a1.3,1.3,0,0,1,1.3-1.3,1.293,1.293,0,0,1,.918.381,1.306,1.306,0,0,1,.377.918v.556" transform="translate(1164.553 325.262)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <path id="Path_429" data-name="Path 429" d="M-1155.738-283.11v.686a1.908,1.908,0,0,1-1.909,1.909,1.911,1.911,0,0,1-1.913-1.909v-.686" transform="translate(1165.55 309.863)" fill="none" stroke="#4a1c08" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    </g>
  </g>
</svg>
`,
      title: "Đồ<br>Trang Trí",
      url: "category/1",
    },
  ];
  return (
    <div className="grid grid-cols-7 bg-white px-[25px] pt-[15px] pb-[35px] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.6)] relative top-[-50px]">
      {list.map((item, index) => (
        <Link key={index} to={item.url}>
          <div className="flex items-center flex-col gap-2">
            <div
              className="duration-500 hover:scale-125"
              dangerouslySetInnerHTML={{ __html: item.svg }}
            />
            <div
              className="text-center text-sm font-semibold duration-500 hover:text-brown-light"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListCategory;
