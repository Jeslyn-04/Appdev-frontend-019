import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Css/BookDetails.css';
import Navbar from './Navbar';
import UserContext from '../Components/UserContext';
import bg from '../Images/Background/bg3-1.jpg';

const BookDetails = () => {
  // Extracting the bookId from the URL parameters
  const { bookId } = useParams();
  // State to hold the book details
  const [book, setBook] = useState(null);
  // Extracting user and setUser from the UserContext
  const { user, setUser } = useContext(UserContext);
  const [showDialog, setShowDialog] = useState(false); // State to control the visibility of the dialog


  // Fetch book details when the component mounts or when bookId changes
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        // Fetching book details from Google Books API
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyCFHINpfGELTxk81qUkliczmNsB13Rc_QA`
        );
        // Setting the fetched book details to the state
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  // Function to strip HTML tags from a string
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  // Function to handle adding the book to the user's "Want to Read" list
  const handleAddToWantToRead = async () => {
    try {
      // Creating an updated user object with the new book added to the "wanttoread" list
      const updatedUser = {
        ...user,
        wanttoread: [...user.wanttoread, book.volumeInfo.title],
      };
      // Sending a PUT request to update the user's details on the server
      await axios.put(`http://localhost:8080/api/users/${user.id}`, updatedUser);
      // Updating the user context with the new user details
      setUser(updatedUser);
      setShowDialog(true); // Show the dialog
      setTimeout(() => setShowDialog(false), 2000); // Hide the dialog after 2 seconds
    } catch (error) {
      console.error('Error updating want to read list:', error);
    }
  };

  // Function to handle adding the book to the user's "Read Books" list
  const handleAddToReadBooks = async () => {
    try {
      // Creating an updated user object with the new book added to the "completed" list
      const updatedUser = {
        ...user,
        completed: [...user.completed, book.volumeInfo.title],
      };
      // Sending a PUT request to update the user's details on the server
      await axios.put(`http://localhost:8080/api/users/${user.id}`, updatedUser);
      // Updating the user context with the new user details
      setUser(updatedUser);
      setShowDialog(true); // Show the dialog
      setTimeout(() => setShowDialog(false), 2000); // Hide the dialog after 2 seconds
    } catch (error) {
      console.error('Error updating read books list:', error);
    }
  };

  // If the book details are not yet fetched, show a loading message
  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="background">
        <img src={bg} alt="Background Image" />
      </div>
      <br />
      <div style={{ display: "flex" }}>
      <div className="book-details">
      <div  style={{ display: "flex" }}>
      <div>
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      </div>
      <div style={{textAlign:'justify'}} className='dets'>
      <br></br>
      <h2 style={{ textAlign: "center", marginTop: "-10px", fontWeight: "bolder",fontFamily:"cursive" }}>
        {book.volumeInfo.title}
      </h2>
      <br></br>
      <h3 style={{ fontWeight: "600",fontFamily:"cursive"  }}>Authors: {book.volumeInfo.authors?.join(', ')}</h3>
      <br></br>
      <h4 style={{ fontWeight: "600" ,fontFamily:"cursive" }}>Published Date: {book.volumeInfo.publishedDate}</h4>
      <br></br>
      <h4 style={{ fontWeight: "600",fontFamily:"cursive"  }}>Genres: {book.volumeInfo.categories?.join(', ')}</h4>
      <br></br>
      <h4 style={{ fontWeight: "600",fontFamily:"cursive"  }}>Page Count: {book.volumeInfo.pageCount}</h4>
      <br></br>
      {book.volumeInfo.averageRating && (
        <>
          <h4 style={{ fontWeight: "600", fontFamily: "cursive" }}>Average Rating: {book.volumeInfo.averageRating}</h4>
          <br></br>
        </>
      )}
      <br></br>
        <button onClick={handleAddToWantToRead} style={{marginLeft:"30px",borderRadius:"35px",height:"40px",width:"140px",fontSize:"21px",borderStyle:"none",fontFamily:"cursive"}}>Read Next</button>
        <button onClick={handleAddToReadBooks} style={{marginLeft:"20px",borderRadius:"35px",height:"40px",width:"140px",fontSize:"21px",borderStyle:"none",fontFamily:"cursive"}}>Completed</button>
        </div>
        </div>
        <div id="description">
          <h2 style={{ fontWeight: "500",fontFamily:"cursive" }}>Overview:</h2>
          <br />
          <p>{stripHtmlTags(book.volumeInfo.description)}</p>
        </div>
        </div>
        <div id="review">
          <h1>Review</h1>
          {/* Add your review component or content here */}
        </div>
      </div>
      {/* Dialog box */}
      {showDialog && (
        <div className="dialog-box">
          <p>Added to list</p>
        </div>
      )}
    </>
  );
};

export default BookDetails;
