#User-level components

##Navigation elements
Whatever that might entail.
##Login elements
The usual suspects.
##User settings
This will most likely be a dashboard of some sort where users can manage their team affiliations, 
contact preferences, profile image and whatever else. Can be a view or a dynamic component.
##Team management
Team owners can edit the team in most of the same ways a user can edit their profile
##Home
Time until hackathon || time until end of hackathon in progress. If hackathon is in progress, this 
is also where we'd show the prompts and encourage people to check out the team view. Also a means 
of signing up for the wait list or mailing list
##Team list view
See list of current or approaching hackathon's teams. If hackathon is in progress viewers can
click to view a team or view a team's current progress on their deployment.
##User profile view
Past teams. Past contributions. Past whatever. Current whatever.
##Team profile view
The same sort of data as user but also contains many user links.
##About HyperBowl
Information about our team, but also about the hackathon, its motivations, and an encouragement for
others to steal our software and idea.

#Admin-level components

##Admin dashboard
Edit user, team, and admin.
##CMS-web
Compose copy and images for next hackathon and or edit previous.
##CMS-email
This might be the same system as above, but to keep the idea clear let's treat it like a separate
entity. We should be able to write and design emails here and schedule their release.

#Services

##Scheduled email system
This is the heart of our notification system, whatever that may ultimately be. This is how we'll
notify teams to start and stop as well as communicate with would be participants, newsletter
subscribers and anybody else. Basically we manage the hackathon itself with this system, but it's
also how we maintain the community.
##Auth
You know, for users

#Data

##Teams(all details past and present)
##Users(all details past and present)
##Applications(made by past teams)
##Subscribers(email)
##Hackathons(both the view content and any actual related data)
##Emails(content)
##Templates(email content templates for boilerplate communication)