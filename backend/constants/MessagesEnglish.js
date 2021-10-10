module.exports = {
  // HTTP ERRORS
  BAD_REQUEST: "Bad Request", // 400
  UNAUTHORIZED: "Unauthorized", // 401
  PAYMENT_REQUIRED: "Payment Required", // 402
  FORBIDDEN: "Forbidden", // 403
  NOT_FOUND: "Not Found", // 404
  REQUEST_TIMEOUT: "Request Timeout", // 408
  INTERNAL_SERVER_ERROR: "Internal Server Error", // 500

  // HTTP ERROR MESSAGES
  LOGIN_SESSION_EXPIRED:
    "Login session expired. Please login again to continue", // 408
  AUTH_TOKEN_MISSING: "Authorization Failed. Auth Token Missing", // 401
  NOT_ALLOW_ACCESS_WEBSERVICES: "You are not allowed to access webservices", // 401
  PERMISSION_DENIED: "Permission denied to perform this action", // 403
  INVALID_USER_ACCESS: "Invalid User Access",

  // PROFILE
  NO_ACCOUNT_EXIST_EMAIL_PHONE:
    "No account is associated with provided Email/Phone",
  NO_ACCOUNT_EXIST_EMAIL: "No account is associated with provided email",
  NO_ACCOUNT_EXIST_PHONE: "No account is associated with provided phone",
  PHONE_ALREADY_REGISTERED:
    "An account is already associated with provided phone number",
  EMAIL_ALREADY_REGISTERED:
    "An account is already associated with provided email address",
  EMAIL_ALREADY_REGISTERED_FB:
    "You are already registered with this email address through your facebook account",
  EMAIL_ALREADY_REGISTERED_GOOGLE:
    "You are already registered with this email address through your google account",

  NEW_EMAIL_ALREADY_EXIST: "New email address is already exist",
  NEW_PHONE_ALREADY_EXIST: "New phone number is already exist",

  VERIFY_OTP:
    "Please verify OTP which is sent to your provided email / phone number",
  OTP_SENT_ON_EMAIL: "OTP has sent to your email",
  OTP_SENT_ON_PHONE: "OTP has sent to your phone",
  OTP_SENT_ON_USERNAME: "OTP has sent to your provided details",
  OTP_SENT_ON_EMAIL_PHONE: "OTP has sent to your provided email / phone number",
  PROVIDE_DIFFERENT_EMAIL: "Please provide a different email",
  PROVIDE_DIFFERENT_PHONE: "Please provide a different phone",

  LOGIN_SUCCESS: "You have logged in successfully",
  LOGOUT_SUCCESS: "You have logged out successfully",
  OTP_VERIFY_SUCCESS: "OTP has verified successfully",
  WAIT_FOR_ADMIN_APPROVAL:
    "OTP has verified successfully. You will be able to login after your account approved from administrator",
  CHANGE_PASSWORD_SUCCESS: "You have changed password successfully",
  CHANGE_EMAIL_SUCCESS: "You have changed email successfully",
  CHANGE_PHONE_SUCCESS: "You have changed phone successfully",
  CHANGE_PROFILE_SUCCESS: "You have changed your profile successfully",
  CHANGE_NOTIFICATION_SUCCESS:
    "You have changed notification settings successfully",
  CHANGE_PROFILE_IMAGE_SUCCESS: "Your profile image has changed successfully",

  ACCOUNT_IS_DEACTIVATE:
    "Your account has deactivated. Please contact to Administration",
  ACCOUNT_IS_DELETED:
    "Your account has removed. Please contact to Administration",
  ACCOUNT_IS_NOT_VERIFIED: "Your account is not verified yet",
  WAIT_FOR_ACCOUNT_APPROVAL: "Your account is not verified yet",

  INVALID_LOGIN_CREDENTIALS: "Login credentials are invalid",
  INVALID_USERNAME: "Invalid Username. No account exist with provided username",
  INVALID_EMAIL: "Invalid Email. No account exist with this email",
  INVALID_PHONE:
    "Invalid Phone Number. No account exist with this phone number",
  INVALID_USERNAME_EMAIL: "Invalid Username/Email. No account exist",
  INVALID_OTP: "Invalid OTP",
  INVALID_OLD_PASSWORD: "Your old password is incorrect",
  EMAIL_IS_BLANK:
    "Email address is empty. Please provide a valid email address",

  // USER
  USER_NOT_EXIST: "User doesn't exist",
  USER_CREATE_SUCCESS: "User has created successfully",
  USER_UPDATE_SUCCESS: "User details has updated successfully",
  USER_STATUS_UPDATE_SUCCESS: "User status has updated successfully",
  USER_DELETE_SUCCESS: "User has deleted successfully",
  NO_USERS_EXIST: "No users found",

  INVALID_OTP_REQUEST: "Invalid OTP Request",
  INVALID_USER_REQUEST: "Invalid User Request",
  INVALID_UPDATE_REQUEST: "Invalid Update Request",
  INVALID_IMAGE_FORMAT:
    "Invalid Image File Format. Only JPG, JPEG, PNG format are allowed",
  INVALID_DOC_FORMAT: "Invalid File Format. Only PDF format are allowed",
  INVALID_ADDRESS: "Invalid Address",
  REQUIRED_ADDRESS_FIELDS_EMPTY: "Required address fields cannot be empty",
  FIELD_CANNOT_BE_EMPTY: "This field cannot be empty",
  INAVLID_START_DATE: "Start date shouldn't be a past date",
  INAVLID_END_DATE: "End date should be greater than start date",
  MAX_QTY_LESS_THAN_USED_QTY:
    "Max quantity should be greater than used quantity",
  NOT_ALLOW_TO_CHANGE_PASSWORD:
    "You are not allowed to changed password. You can login via social links only",
  NO_NOTIFICATIONS_EXIST: "No notifications yet",
  CONTACT_REQUEST_SUCCESS: "Your request has submitted successfully",
  ADMIN_NOT_EXIST: "Admin doesn't exist",

  USER_CAN_ACTIVE_AFTER_VERIFIED:
    "User has not verified the account. You can activate only verified users",

  // CUSTOMER
  CUSTOMER_CREATE_SUCCESS: "Customer has created successfully",
  CUSTOMER_UPDATE_SUCCESS: "Customer details has updated successfully",
  CUSTOMER_STATUS_UPDATE_SUCCESS: "Customer status has updated successfully",
  CUSTOMER_DELETE_SUCCESS: "Customer has deleted successfully",
  CUSTOMER_INVALID_REQUEST: "Invalid Customer Request",

  // VENDOR
  VENDOR_CREATE_SUCCESS: "Vendor has created successfully",
  VENDOR_UPDATE_SUCCESS: "Vendor details has updated successfully",
  VENDOR_STATUS_UPDATE_SUCCESS: "Vendor status has updated successfully",
  VENDOR_DELETE_SUCCESS: "Vendor has deleted successfully",
  VENDOR_INVALID_REQUEST: "Invalid Vendor Request",
  VENDOR_RENEWAL_SUCCESS: "Vendor has renewed successfully",
  VENDOR_ALREADY_RENEWED: "Vendor has already renewed",

  // DRIVER
  DRIVER_CREATE_SUCCESS: "Driver has created successfully",
  DRIVER_UPDATE_SUCCESS: "Driver details has updated successfully",
  DRIVER_STATUS_UPDATE_SUCCESS: "Driver status has updated successfully",
  DRIVER_DELETE_SUCCESS: "Driver has deleted successfully",
  DRIVER_INVALID_REQUEST: "Invalid Driver Request",
  DRIVER_RENEWAL_SUCCESS: "Driver has renewed successfully",
  DRIVER_ALREADY_RENEWED: "Driver has already renewed",

  // SUB ADMINS
  SUBADMIN_CREATE_SUCCESS: "Sub admin has created successfully",
  SUBADMIN_UPDATE_SUCCESS: "Sub admin details has updated successfully",
  SUBADMIN_STATUS_UPDATE_SUCCESS: "Sub admin status has changed successfully",
  SUBADMIN_DELETE_SUCCESS: "Sub admin has deleted successfully",
  SUBADMIN_INVALID_REQUEST: "Invalid Sub admin Request",

  // ADDRESSES
  ADDRESS_CREATE_SUCCESS: "Address has created successfully",
  ADDRESS_UPDATE_SUCCESS: "Address details has updated successfully",
  ADDRESS_DEFAULT_SUCCESS: "Address set as default successfully",
  ADDRESS_DELETE_SUCCESS: "Address has deleted successfully",
  ADDRESS_INVALID_REQUEST: "Invalid Address Request",

  // CARDS
  CARD_DELETE_SUCCESS: "Card has deleted successfully",
  CARD_INVALID_REQUEST: "Invalid Card Request",

  // VEHICLE TYPE
  VEHICLE_TYPE_CREATE_SUCCESS: "Vehicle Type has created successfully",
  VEHICLE_TYPE_UPDATE_SUCCESS: "Vehicle Type details has updated successfully",
  VEHICLE_TYPE_STATUS_UPDATE_SUCCESS:
    "Vehicle Type status has changed successfully",
  VEHICLE_TYPE_DELETE_SUCCESS: "Vehicle Type has deleted successfully",
  VEHICLE_TYPE_INVALID_REQUEST: "Invalid Vehicle Type Request",
  VEHICLE_TYPE_ALREADY_EXIST: "Vehicle Type is already exist",

  // BANNERS
  BANNER_CREATE_SUCCESS: "Banner has created successfully",
  BANNER_UPDATE_SUCCESS: "Banner details has updated successfully",
  BANNER_STATUS_UPDATE_SUCCESS: "Banner status has changed successfully",
  BANNER_DELETE_SUCCESS: "Banner has deleted successfully",
  BANNER_INVALID_REQUEST: "Invalid Banner Request",

  // CATEGORY
  CATEGORY_CREATE_SUCCESS: "Category has created successfully",
  CATEGORY_UPDATE_SUCCESS: "Category details has updated successfully",
  CATEGORY_STATUS_UPDATE_SUCCESS: "Category status has changed successfully",
  CATEGORY_DELETE_SUCCESS: "Category has deleted successfully",
  CATEGORY_INVALID_REQUEST: "Invalid Category Request",
  CATEGORY_ALREADY_EXIST: "Category is already exist",
  CATEGORY_CANNNOT_DELETE_DUE_TO_SERVICES:
    "Category cannot be delete because it's associated with any services data",
  INVALID_CATEGORY_EXIST_FOR_EXPRESS_DELIVERY:
    "There are some items in your cart for which express delivery not available",

  // SUBCATEGORY
  SUBCATEGORY_CREATE_SUCCESS: "Sub category has created successfully",
  SUBCATEGORY_UPDATE_SUCCESS: "Sub category details has updated successfully",
  SUBCATEGORY_STATUS_UPDATE_SUCCESS:
    "Sub category status has changed successfully",
  SUBCATEGORY_DELETE_SUCCESS: "Sub category has deleted successfully",
  SUBCATEGORY_INVALID_REQUEST: "Invalid Sub category Request",
  SUBCATEGORY_ALREADY_EXIST: "Sub category is already exist",

  // SERVICE PROVIDER
  SERVICE_PROVIDER_CREATE_SUCCESS: "Service Provider has created successfully",
  SERVICE_PROVIDER_UPDATE_SUCCESS:
    "Service Provider details has updated successfully",
  SERVICE_PROVIDER_STATUS_UPDATE_SUCCESS:
    "Service Provider status has changed successfully",
  SERVICE_PROVIDER_DELETE_SUCCESS: "Service Provider has deleted successfully",
  SERVICE_PROVIDER_INVALID_REQUEST: "Invalid Service Provider Request",
  SERVICE_PROVIDER_ALREADY_EXIST: "Service Provider is already exist",

  // CLOTHE RETURN TYPE
  CLOTHE_RETURN_TYPE_CREATE_SUCCESS:
    "Clothe Return Type has created successfully",
  CLOTHE_RETURN_TYPE_UPDATE_SUCCESS:
    "Clothe Return Type details has updated successfully",
  CLOTHE_RETURN_TYPE_STATUS_UPDATE_SUCCESS:
    "Clothe Return Type status has changed successfully",
  CLOTHE_RETURN_TYPE_DELETE_SUCCESS:
    "Clothe Return Type has deleted successfully",
  CLOTHE_RETURN_TYPE_INVALID_REQUEST: "Invalid Clothe Return Type Request",
  CLOTHE_RETURN_TYPE_ALREADY_EXIST: "Clothe Return Type is already exist",

  // CLEANING TYPE
  CLEANING_TYPE_CREATE_SUCCESS: "Cleaning Type has created successfully",
  CLEANING_TYPE_UPDATE_SUCCESS:
    "Cleaning Type details has updated successfully",
  CLEANING_TYPE_STATUS_UPDATE_SUCCESS:
    "Cleaning Type status has changed successfully",
  CLEANING_TYPE_DELETE_SUCCESS: "Cleaning Type has deleted successfully",
  CLEANING_TYPE_INVALID_REQUEST: "Invalid Cleaning Type Request",
  CLEANING_TYPE_ALREADY_EXIST: "Cleaning Type is already exist",

  // TAG
  TAG_CREATE_SUCCESS: "Tag has created successfully",
  TAG_UPDATE_SUCCESS: "Tag details has updated successfully",
  TAG_STATUS_UPDATE_SUCCESS: "Tag status has changed successfully",
  TAG_DELETE_SUCCESS: "Tag has deleted successfully",
  TAG_INVALID_REQUEST: "Invalid Tag Request",
  TAG_ALREADY_EXIST: "Tag is already exist",

  // SERVICE TYPE
  SERVICE_TYPE_CREATE_SUCCESS: "Service Type has created successfully",
  SERVICE_TYPE_UPDATE_SUCCESS: "Service Type details has updated successfully",
  SERVICE_TYPE_STATUS_UPDATE_SUCCESS:
    "Service Type status has changed successfully",
  SERVICE_TYPE_DELETE_SUCCESS: "Service Type has deleted successfully",
  SERVICE_TYPE_INVALID_REQUEST: "Invalid Service Type Request",
  SERVICE_TYPE_ALREADY_EXIST: "Service Type is already exist",

  // SOFTENER
  SOFTENER_CREATE_SUCCESS: "Softener has created successfully",
  SOFTENER_UPDATE_SUCCESS: "Softener details has updated successfully",
  SOFTENER_STATUS_UPDATE_SUCCESS: "Softener status has changed successfully",
  SOFTENER_DELETE_SUCCESS: "Softener has deleted successfully",
  SOFTENER_INVALID_REQUEST: "Invalid Softener Request",
  SOFTENER_ALREADY_EXIST: "Softener is already exist",

  // PERFUME
  PERFUME_CREATE_SUCCESS: "Perfume has created successfully",
  PERFUME_UPDATE_SUCCESS: "Perfume details has updated successfully",
  PERFUME_STATUS_UPDATE_SUCCESS: "Perfume status has changed successfully",
  PERFUME_DELETE_SUCCESS: "Perfume has deleted successfully",
  PERFUME_INVALID_REQUEST: "Invalid Perfume Request",
  PERFUME_ALREADY_EXIST: "Perfume is already exist",

  // BLEACH
  BLEACH_CREATE_SUCCESS: "Bleach has created successfully",
  BLEACH_UPDATE_SUCCESS: "Bleach details has updated successfully",
  BLEACH_STATUS_UPDATE_SUCCESS: "Bleach status has changed successfully",
  BLEACH_DELETE_SUCCESS: "Bleach has deleted successfully",
  BLEACH_INVALID_REQUEST: "Invalid Bleach Request",
  BLEACH_ALREADY_EXIST: "Bleach is already exist",

  // SHAMPOO
  SHAMPOO_CREATE_SUCCESS: "Shampoo has created successfully",
  SHAMPOO_UPDATE_SUCCESS: "Shampoo details has updated successfully",
  SHAMPOO_STATUS_UPDATE_SUCCESS: "Shampoo status has changed successfully",
  SHAMPOO_DELETE_SUCCESS: "Shampoo has deleted successfully",
  SHAMPOO_INVALID_REQUEST: "Invalid Shampoo Request",

  // SANITIZER
  SANITIZER_CREATE_SUCCESS: "Sanitizer has created successfully",
  SANITIZER_UPDATE_SUCCESS: "Sanitizer details has updated successfully",
  SANITIZER_STATUS_UPDATE_SUCCESS: "Sanitizer status has changed successfully",
  SANITIZER_DELETE_SUCCESS: "Sanitizer has deleted successfully",
  SANITIZER_INVALID_REQUEST: "Invalid Sanitizer Request",

  // PROMOCODES
  PROMOCODE_CREATE_SUCCESS: "Promocode has created successfully",
  PROMOCODE_UPDATE_SUCCESS: "Promocode details has updated successfully",
  PROMOCODE_STATUS_UPDATE_SUCCESS: "Promocode status has changed successfully",
  PROMOCODE_DELETE_SUCCESS: "Promocode has deleted successfully",
  NEW_PROMOCODE_ALREADY_EXIST: "New Promocode is already exist",
  PROMOCODE_ALREADY_EXIST: "Promocode is already exist",
  PROMOCODE_INVALID_REQUEST: "Invalid Promocode Request",
  PROMOCODE_INVALID: "Invalid Promocode",
  PROMOCODE_EXPIRED: "Promocode has been expired",
  INVALID_PROMOCODE_VENDOR:
    "This promocode is not applicable for selected vendor",
  INVALID_PROMOCODE_VENDOR_PICKUP_DISTANCE:
    "This promocode is not applicable for pickup distance from selected vendor",
  INVALID_PROMOCODE_VENDOR_DELIVERY_DISTANCE:
    "This promocode is not applicable for delivery distance from selected vendor",
  INVALID_PROMOCODE_MIN_AMOUNT:
    "This promocode is not applicable for current sub total amount",

  // CART ITEMS
  SERVICE_NOT_AVAILABLE: "Service is not available",
  INVALID_SERVICE_ITEMS_EXIST: "Invalid service items exist",
  CARTITEM_ADD_SUCCESS: "An item has added to the laundry basket successfully",
  CARTITEM_UPDATE_SUCCESS: "Laundry basket has updated successfully",
  CARTITEM_REMOVE_SUCCESS: "Laundry basket item has removed successfully",
  CART_CLEAR_SUCCESS: "Laundry basket has cleared successfully",
  CART_IS_EMPTY: "No items in your laundry basket",
  ITEM_NOT_EXIST: "Item doesn't exist",
  ITEM_QUANTITY_EXCEEDED: "Item exceeded the maximum available quantity limit",
  CART_ITEMS_QUANTITY_EXCEEDED:
    "There are some items exceeded the maximum available quantity limit",
  ADD_ITEM_VENDOR_RESTRICTION:
    "You are allow to add items of only one vendor at a time into the laundry basket",
  INVALID_CARTITEM_REQUEST: "Invalid Laundry basket Request",

  // FAVOURITE / UNFAVOURITE
  FAVOURITE_SUCCESS: "Added to Favorite",
  UNFAVOURITE_SUCCESS: "Removed from favorite",

  // SERVICES
  SERVICE_ALREADY_EXIST: "Service is already exist for selected sub category",
  SERVICE_CREATE_SUCCESS: "Service has created successfully",
  SERVICE_UPDATE_SUCCESS: "Service has updated successfully",
  SERVICE_STATUS_UPDATE_SUCCESS: "Service status has changed successfully",
  SERVICE_DELETE_SUCCESS: "Service has deleted successfully",
  SERVICE_INVALID_REQUEST: "Invalid Service Request",

  // ORDERS
  ORDER_INVALID_REQUEST: "Invalid Order Request",
  INVALID_PICKUP_DATE: "Pickup date can't be a past date",
  INVALID_PICKUP_ADDRESS: "Pickup address is invalid",
  INVALID_DELIVERY_ADDRESS: "Delivery address is invalid",
  INVALID_DELIVERY_DATE: "Delivery date can't be a past date",
  INVALID_CASH_PAYMENT_METHOD: "Payment by cash is not allowed yet",
  INVALID_CASH_PAYMENT_AMOUNT:
    "The amount to be paid exceeds the limit of the allowable amount in cash",
  INVALID_CARD_PAYMENT_AMOUNT:
    "The amount to be paid should be less than 999 OMR",
  ORDER_PLACED_SUCCESS: "Order has placed successfully",
  ORDER_CANNOT_CANCEL: "You cannot cancel the order now",
  ORDER_CANCEL_SUCCESS: "Order has cancelled successfully",
  ORDER_ACCEPT_SUCCESS: "Order has accepted successfully",
  ORDER_REJECT_SUCCESS: "Order has rejected successfully",
  ORDER_PICKEDUP_SUCCESS: "Order has picked up successfully",
  ORDER_RECEIVED_SUCCESS: "Order has received successfully",
  ORDER_IN_PROCESS_SUCCESS: "Order has moved to process successfully",
  ORDER_FINISHED_SUCCESS: "Order has finished successfully",
  ORDER_DELIVERY_AVAILIBILITY_ACCEPT:
    "Your Availability to receive your order has been confirmed successfully",
  ORDER_DELIVERY_AVAILIBILITY_REJECT:
    "Order delivery time has updated successfully",
  ORDER_OUT_FOR_DELIVERY_SUCCESS: "Order has out for delivery successfully",
  ORDER_DELIVERED_SUCCESS: "Order has delivered successfully",
  ORDER_DRIVER_REQUESTED_SUCCESS: "Request sent to the driver successfully",
  ORDER_DRIVER_REMOVED_SUCCESS: "Driver has removed successfully",
  ORDER_FEEDBACK_SUCCESS: "Thank you for feedback",
  FEEDBACK_ALREADY_EXIST:
    "You have already provided the feedback for this user",
  ORDER_DELAY_REASON_REQUIRED: "Please provide a valid reason for delay",
  ORDER_REASON_REQUIRED: "Please provide a valid reason",
  ORDER_ACCEPT_DENIED:
    "You can't accept this order because you already have an another order",

  // MONEY CLAIMS
  MONEY_CLAIMS_CREATE_SUCCESS:
    "You have requested for claim money successfully",
  MONEY_CLAIMS_ACCEPTED: "Money claim request has been accepted successfully",
  MONEY_CLAIMS_REJECTED: "Money claim request has been rejected successfully",
  MONEY_CLAIMS_INSUFFICIENT_AMOUNT:
    "The available amount is insufficient as per your claim request",
  MONEY_CLAIMS_THRESHOLD_LIMIT:
    "The available amount must be more than threshold limit",
  MONEY_CLAIMS_INVALID_REQUEST: "Invalid Money Claim Request",

  // NOTIFICATION
  NOTIFICATIONS_SENT_SUCCESS: "Notification has sent successfully",

  // SETTINGS
  SETTINGS_UPDATE_SUCCESS: "Settings has updated successfully",
  SETTINGS_NOT_EXIST: "Settings data not found",

  // ENQUIRIES
  ENQUIRY_CREATE_SUCCESS: "Your inquiry has submitted successfully",
  INVALID_ENQUIRY_REQUEST: "Invalid Inquiry Request",

  // CONTENT
  CONTENT_UPDATE_SUCCESS: "Content has updated successfully",
  INVALID_CONTENT_KEY: "Invalid content key",
  NOT_ALLOW_CONTENT_KEY: "Not allowed to update content with this key",

  // FAQS
  FAQ_CREATE_SUCCESS: "FAQ has created successfully",
  FAQ_UPDATE_SUCCESS: "FAQ has updated successfully",
  FAQ_STATUS_UPDATE_SUCCESS: "FAQ status has changed successfully",
  FAQ_DELETE_SUCCESS: "FAQ has deleted successfully",
  INVALID_FAQ_REQUEST: "Invalid FAQ Request",
};
