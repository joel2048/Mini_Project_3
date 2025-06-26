Mini-Projet 3

-	What was your requirements gathering and design process?:

  	see Figma screenshot and ToDo-List section
-	Overview of application and its features:

    eShop App for Yu-gi-oh Cards
  	with the functions to
 	  - make user account
  	- view and sort products
  	- add items to wishlist
    - add items to cart
    - order items from cart (simulated)
-	Where does the card data come from?:

    external API: https://db.ygoprodeck.com/api/v7/cardinfo.php
- How is this data inserted into the database?:

    seed with axios fetch
-	How is the data structured?:

  	SQL tables
-	CRUD operations:
  
      Create:
      
      -wishlist item
        
      -put item into cart
      
      Read:
      
      -view products
 	
      -view wishlist
 	
      -view cart
      
      Update:
      
      -mark order as payed
 	
      -update quantity of cart item
      
      Delete:
      
      -remove item from wishlist
 	
      -remove item from cart


  ToDo: X = Done

    X-Brainstorm MVC structure

    X-Create the SQL schema with migration
    
    X-Fetch API and populate "products" with seed
    
    X-Create random seeds for all other tables

    -Build route/controller/service logic for all requests

        X-show product list (read)
        
        X-show wishlist items by ID
        
        X-wishlist item (create)
        
        X-wishlist item (remove)
        
        X-put item into cart/order (create)
        
        X-remove item from cart (update)
        
        X-payment (update)
        
        X-showCart
        
        X-make OrderItem quantity increase instead of duplicates
        
        -calculate price total for Order
    
        -prevent duplicate wishlist-item
        
        -showPayedOrders

    optional:
      -add tokens/refreshTokens/log-in function
      -add Redis cache

  
    


