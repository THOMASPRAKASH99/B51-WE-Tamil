 -- use guvi;

 -- create table user(
-- 		userId int,
--         fristname varchar(255),
--         lastname varchar(255),
--         email varchar (255),
--         mobile varchar(255),
--         status boolean
-- )

	-- insert into user values 
--     (1,'Thomas','Prakash','thomasprakash@gmail.com','9847654312',true),
--     (2,'Daniel','Abishek','danielabishek@gmail.com','9876543210',true),
--     (3,'John','Don','johnthedon@gmail.com','3216549870',false),
--     (4,'seemon','sharma','seemonsharma@gmail.com','6549873210',false),
--     (5,'sibiyon','sharma','sibiyonsharma@gmail.com','9871236540',true);
    
	-- * select concat(fristname,' ',lastname) as name from user; 
	
    -- * select * from user where status=1;	 (this command is for filter.)
   
   -- SET SQL_SAFE_UPDATES = 0;
  
  --  * update user set
-- 			lastname = 'Dharmendra',
--         mobile = '9874561230'
--         where userId = 4; 		(this command is use for update.)
  
  -- * delete from user where status=0  (for delete)
  
  -- * drop table user; 	(delete for the table)
  
  
 --  create table user(
-- 		userId int not null unique auto_increment,
--         fristname varchar(255),
--         lastname varchar(255),
--         email varchar (255) unique not null,
--         mobile varchar(255) unique not null,
--         status boolean default false,
--         primary key(userId)
-- );

  -- insert into user values 
--      (1,'Thomas','Prakash','thomasprakash@gmail.com','9847654312',true),
--      (2,'Daniel','Abishek','danielabishek@gmail.com','9876543210',true),
--      (3,'John','Don','johnthedon@gmail.com','3216549870',false),
--      (4,'seemon','sharma','seemonsharma@gmail.com','6549873210',false),
--      (5,'sibiyon','sharma','sibiyonsharma@gmail.com','9871236540',true);
     
	
    -- create table course (
-- 		courseId int auto_increment not null,
--         name varchar (255) not null,
--         primary key(courseId)
--     );
--     
--     insert into course (name) values ('Java'),('JavaScript'),('DataScience'),('Python');
    
   
   -- create table course_status (
--  		courseStatusId int unique not null auto_increment,
--          userId int not null,
--          courseId int not null,
--          status boolean default true,
--          primary key(courseStatusId),
--          foreign key (userId) references user(userId),
--          foreign key (courseId) references course(courseId)
--     );

-- 		insert into course_status (userId,courseId) values
--         (1,4),(2,1),(3,2),(4,3);

-- 		-- select * from course_status;	
--         
--         select * from course_status
--         join course on course_status.courseId = course.courseId
--         join user on user.userId = course_status.userId;

	-- select * from course_status right join user on course_status.userId = user.userId;
    -- select * from user left join course_status on course_status.userId = user.userId;