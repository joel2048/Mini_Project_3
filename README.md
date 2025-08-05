Mini-Projet 3:
Shop App for YuGiOh Cards

-	What was your design process?:

  	see Figma screenshot and ToDo-List section
-	Overview of application and its features:

 	  - make user account
  	- view and sort products
  	- add items to wishlist
    - add items to cart
    - order items from cart (create order entry, no payment)
-	Where does the card data come from?:

    external API: https://db.ygoprodeck.com/api/v7/cardinfo.php
- How is this data inserted into the database?:

    seed with axios fetch
-	How is the data structured?:

  	SQL tables
-	CRUD operations:
  
      Create:
      
      -add wishlist item
        
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

    X-Brainstorm entity structure

    X-Create the SQL schema with migration
    
    X-Fetch API and populate "products" with seed
    
    X-Create random seeds for all other tables

    Build route/controller/service logic for all requests:

        X-show product list (read)

        X-sort products by type (read)

        X-sort products by price (read)
        
        X-show wishlist items by ID (read)
        
        X-wishlist item (create)
        
        X-wishlist item (delete)
        
        X-put item into cart/order (create)
        
        X-remove item from cart (delete)
        
        X-payment (update)
        
        X-showCart (read)
        
        X-make OrderItem quantity increase instead of duplicates (update)

        X-prevent duplicate wishlist-item
        
        -calculate price total for Order
        
        -showPayedOrders

    optional:
      -add tokens/refreshTokens/log-in and register function with bcrypt hash
      -add Redis cache

  
    


