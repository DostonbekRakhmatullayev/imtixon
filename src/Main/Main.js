import { Private } from "../Private";
import { Routes, Route } from "react-router-dom";
import { AddAuthor } from "../pagesAccount/AddAuthor/AddAuthor";
import { AddBook } from "../pagesAccount/AddBook/AddBook";
import { MyAccount } from "../pagesAccount/MyAccount/MyAccount";
import { AccountMy } from "../pagesAccount/MyAccount/AccountMy/AccountMy/AccountMy";
import { Security } from "../pagesAccount/MyAccount/AccountMy/Security/Security";
import { MakePayment } from "../pagesAccount/MyAccount/AccountMy/MakePayment/MakePayment";
import { PagesGenreld1 } from "../pagesData/pagesGenreId1";
import { useEffect, useState } from "react";
import axios from "axios";
import { PagesBook } from "../pagesData/pagesBook";

export const Main = () => {
  const [idData, setidData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/genreId/1`)
      .then((res) => setidData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
    
      <Private></Private>
      <Routes>  
     

         <Route path={`/genrel/:id`} element={<PagesGenreld1/>} />
         <Route path={`/book/:id`} element={<PagesBook/>} />
        
      
        <Route path="/Add_book" element={<AddBook />} ></Route>
        <Route path="/Add_author" element={<AddAuthor />} />
        <Route path="/My_account" element={<MyAccount />}>
          <Route path="My_account" index element={<AccountMy />} />
          <Route path="Security" element={<Security />} />
          <Route path="Make_Payment" element={<MakePayment />} />
        </Route>
      </Routes>
    </div>
  );
};
