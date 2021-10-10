module.exports = {
  // HTTP ERRORS
  BAD_REQUEST: "طلب غير جيد",
  UNAUTHORIZED: "غير مصرح",
  PAYMENT_REQUIRED: "مطلوب الدفع",
  FORBIDDEN: "ممنوع",
  NOT_FOUND: "غير موجود",
  REQUEST_TIMEOUT: "طلب المهلة",
  INTERNAL_SERVER_ERROR: "خطأ في الخادم الداخلي",

  // HTTP ERROR MESSAGES
  LOGIN_SESSION_EXPIRED:
    "انتهت صلاحية جلسة تسجيل الدخول ، يرجى إعادة تسجيل الدخول",
  AUTH_TOKEN_MISSING: "فشل في التفويض ، رمز المصادقة مفقود",
  NOT_ALLOW_ACCESS_WEBSERVICES: "لا يسمح لك بالوصول إلى خدمات الويب",
  PERMISSION_DENIED: "تم رفض الإذن للقيام بهذا الإجراء",
  INVALID_USER_ACCESS: "دخول المستخدم غير صحيح",

  // PROFILE
  NO_ACCOUNT_EXIST_EMAIL_PHONE:
    "لا يوجد حساب مرتبط بالبريد الإلكتروني / رقم الهاتف المحمول المقدم",
  NO_ACCOUNT_EXIST_EMAIL: "لا يوجد حساب مرتبط بالبريد الإلكتروني المقدم",
  NO_ACCOUNT_EXIST_PHONE: "لا يوجد حساب مرتبط برقم الهاتف المحمول المقدم",
  PHONE_ALREADY_REGISTERED: "يوجد حساب مرتبط بالفعل برقم الهاتف المقدم",
  EMAIL_ALREADY_REGISTERED: "يوجد حساب مرتبط بالفعل بالبريد الإلكتروني المقدم",
  EMAIL_ALREADY_REGISTERED_FB:
    "لقد قمت بالتسجيل بالفعل في عنوان البريد الإلكتروني هذا من خلال حساب الفيس بوك الخاص بك  ",
  EMAIL_ALREADY_REGISTERED_GOOGLE:
    "تم تسجيلك بالفعل في عنوان البريد الإلكتروني هذا من خلال حساب جوجل الخاص بك",

  NEW_EMAIL_ALREADY_EXIST: "عنوان البريد الإلكتروني الجديد موجود بالفعل",
  NEW_PHONE_ALREADY_EXIST: " رقم الهاتف الجديد موجود بالفعل",

  VERIFY_OTP:
    " يرجى التحقق من الرمز السري المؤقت الذي تم إرساله إلى البريد الإلكتروني / رقم الهاتف المقدم",
  OTP_SENT_ON_EMAIL: " تم إرسال الرمز السري المؤقت إلى بريدك الالكتروني",
  OTP_SENT_ON_PHONE: " تم إرسال الرمز السري المؤقت إلى هاتفك",
  OTP_SENT_ON_USERNAME: " تم إرسال الرمز السري المؤقت إلى التفاصيل التي قدمتها",
  OTP_SENT_ON_EMAIL_PHONE:
    " تم إرسال الرمز السري المؤقت إلى البريد الإلكتروني / رقم الهاتف الذي قدمته",
  PROVIDE_DIFFERENT_EMAIL: "يرجى تقديم بريد إلكتروني مختلف",
  PROVIDE_DIFFERENT_PHONE: "يرجى تقديم رقم هاتف مختلف",

  LOGIN_SUCCESS: "تم تسجيل الدخول بنجاح",
  LOGOUT_SUCCESS: "تم تسجيل الخروج بنجاح",
  OTP_VERIFY_SUCCESS: "  تم التحقق من الرمز السري المؤقت بنجاح",
  WAIT_FOR_ADMIN_APPROVAL:
    " تم التحقق من الرمز السري المؤقت بنجاح ، ستتمكن من تسجيل الدخول إلى حسابك بعد تفعيله من قبل المسؤول ",
  CHANGE_PASSWORD_SUCCESS: "تم تغيير كلمة المرور بنجاح",
  CHANGE_EMAIL_SUCCESS: "تم تغيير البريد الإلكتروني بنجاح",
  CHANGE_PHONE_SUCCESS: "تم تغيير رقم الهاتف بنجاح",
  CHANGE_PROFILE_SUCCESS: "تم تغيير تفاصيل ملف التعريف الخاص بك بنجاح",
  CHANGE_NOTIFICATION_SUCCESS: "تم تغيير إعدادات الإشعارات بنجاح",
  CHANGE_PROFILE_IMAGE_SUCCESS: "تم تغير صورة ملفك الشخصي بنجاح",

  ACCOUNT_IS_DEACTIVATE: "تم الغاء تنشيط حسابك ، يرجى التواصل مع الإدارة",
  ACCOUNT_IS_DELETED: "تم حذف حسابك ، يرجى التواصل مع الإدارة",
  ACCOUNT_IS_NOT_VERIFIED: "لم يتم التحقق من حسابك بعد",
  WAIT_FOR_ACCOUNT_APPROVAL: "لم يتم التحقق من حسابك بعد ، بانتظار الموافقة",

  INVALID_LOGIN_CREDENTIALS: "تفاصيل الدخول غير صحيحة",
  INVALID_USERNAME:
    "اسم المستخدم غير صحيح ،لا يوجد حساب مرتبط باسم المستخدم الذي ادخلته",
  INVALID_EMAIL:
    "بريد إلكتروني غير صحيح ،لا يوجد حساب مرتبط بالبريد الإلكتروني الذي أدخلته",
  INVALID_PHONE:
    "رقم الهاتف غير صحيح ، لا يوجد حساب مرتبط برقم الهاتف الذي أدخلته ",
  INVALID_USERNAME_EMAIL:
    "اسم المستخدم / البريد الإلكتروني غير صحيحان ، لا يوجد حساب مرتبط بهما ",
  INVALID_OTP: "الرمز السري المؤقت غير صحيح",
  INVALID_OLD_PASSWORD: "كلمة المرور القديمة غير صحيحة",
  EMAIL_IS_BLANK:
    "عنوان البريد الإلكتروني فارغ ، يرجى تقديم عنوان بريد إلكتروني صحيح",

  // USER
  USER_NOT_EXIST: "اسم المستخدم غير موجود",
  USER_CREATE_SUCCESS: "تم إنشاء اسم المستخدم بنجاح",
  USER_UPDATE_SUCCESS: "تم تحديث تفاصيل المستخدم بنجاح",
  USER_STATUS_UPDATE_SUCCESS: "تم تحديث حالة المستخدم بنجاح",
  USER_DELETE_SUCCESS: "تم حذف اسم المستخدم بنجاح",
  NO_USERS_EXIST: "لا يوجد مستخدمون",

  INVALID_OTP_REQUEST: "طلب الرمز السري المؤقت غير صحيح",
  INVALID_USER_REQUEST: "طلب المستخدم غير صحيح",
  INVALID_UPDATE_REQUEST: "طلب تحديث غير صحيح",
  INVALID_IMAGE_FORMAT:
    " )JPG /JPEG/ PNGتنسيق ملف صورة غير صالح ، يُسمح فقط بتنسيق (  ",
  INVALID_DOC_FORMAT: ")PDF( تنسيق ملف غير صالح ، يسمح فقط بتنسيق ",
  INVALID_ADDRESS: "عنوان خاطئ",
  REQUIRED_ADDRESS_FIELDS_EMPTY: "لا يمكن أن تكون حقول العناوين المطلوبة فارغة",
  FIELD_CANNOT_BE_EMPTY: "هذا الحقل لا يمكن أن يكون فارغاً",
  INAVLID_START_DATE: "يجب ألا يكون تاريخ البدء تاريخ ماضي",
  INAVLID_END_DATE: "يجب أن يكون تاريخ الانتهاء أكبر من تاريخ البدء",
  MAX_QTY_LESS_THAN_USED_QTY:
    " الكمية القصوى يجب أن تكون أكبر من الكمية المستخدمة",
  NOT_ALLOW_TO_CHANGE_PASSWORD:
    "لا يسمح لك بتغيير كلمة المرور، يمكنك تسجيل الدخول عبر روابط مواقع التواصل الاجتماعي فقط",
  NO_NOTIFICATIONS_EXIST: "لا توجد إشعارات حتى الآن",
  CONTACT_REQUEST_SUCCESS: "تم تقديم طلبك بنجاح",
  ADMIN_NOT_EXIST: "اسم المسؤول غير موجود",

  USER_CAN_ACTIVE_AFTER_VERIFIED:
    "لم يتحقق المستخدم من الحساب. يمكنك تنشيط المستخدمين الذين تم التحقق منهم فقط",

  // CUSTOMER
  CUSTOMER_CREATE_SUCCESS: " تم تسجيل العميل بنجاح",
  CUSTOMER_UPDATE_SUCCESS: "تم تحديث تفاصيل العميل بنجاح",
  CUSTOMER_STATUS_UPDATE_SUCCESS: "تم تحديث حالة العميل بنجاح",
  CUSTOMER_DELETE_SUCCESS: "تم حذف العميل بنجاح",
  CUSTOMER_INVALID_REQUEST: "طلب العميل غير صالح",

  // VENDOR
  VENDOR_CREATE_SUCCESS: "تم تسجيل اشتراك المغسلة",
  VENDOR_UPDATE_SUCCESS: "تم تحديث تفاصيل المغسلة",
  VENDOR_STATUS_UPDATE_SUCCESS: "تم تحديث حالة المغسلة ",
  VENDOR_DELETE_SUCCESS: "تم حذف اشتراك المغسلة ",
  VENDOR_INVALID_REQUEST: "طلب المغسلة غير صالح",
  VENDOR_RENEWAL_SUCCESS: "تم تجديد اشتراك المغسلة بنجاح",
  VENDOR_ALREADY_RENEWED: "اشتراك المغسلة مجدد بالفعل",

  // DRIVER
  DRIVER_CREATE_SUCCESS: "تم تسجيل اشتراك السائق بنجاح",
  DRIVER_UPDATE_SUCCESS: "تم تحديث تفاصيل السائق بنجاح",
  DRIVER_STATUS_UPDATE_SUCCESS: "تم تحديث حالة السائق بنجاح",
  DRIVER_DELETE_SUCCESS: "تم حذف اشتراك السائق بنجاح",
  DRIVER_INVALID_REQUEST: "طلب السائق غير صالح",
  DRIVER_RENEWAL_SUCCESS: "تم تجديد اشتراك السائق بنجاح",
  DRIVER_ALREADY_RENEWED: "اشتراك السائق مجدد بالفعل",

  // SUB ADMINS
  SUBADMIN_CREATE_SUCCESS: " تم تسجيل المشرف المخول بنجاح ",
  SUBADMIN_UPDATE_SUCCESS: "تم تحديث تفاصيل المشرف المخول بنجاح",
  SUBADMIN_STATUS_UPDATE_SUCCESS: "تم تغيير حالة المشرف المخول بنجاح",
  SUBADMIN_DELETE_SUCCESS: "تم حذف تفاصيل المشرف المخول بنجاح",
  SUBADMIN_INVALID_REQUEST: "طلب المشرف المخول غير صالح",

  // ADDRESSES
  ADDRESS_CREATE_SUCCESS: "تم إنشاء العنوان بنجاح",
  ADDRESS_UPDATE_SUCCESS: "تم تحديث تفاصيل العنوان بنجاح",
  ADDRESS_DEFAULT_SUCCESS: "تم تعيين العنوان الافتراضي بنجاح",
  ADDRESS_DELETE_SUCCESS: "تم حذف العنوان بنجاح",
  ADDRESS_INVALID_REQUEST: "طلب عنوان غير صالح",

  // CARDS
  CARD_DELETE_SUCCESS: "تم حذف البطاقة بنجاح",
  CARD_INVALID_REQUEST: "طلب بطاقة غير صالح",

  // VEHICLE TYPE
  VEHICLE_TYPE_CREATE_SUCCESS: "تم إنشاء/ تسجيل نوع المركبة بنجاح",
  VEHICLE_TYPE_UPDATE_SUCCESS: "تم تحديث تفاصيل نوع المركبة بنجاح",
  VEHICLE_TYPE_STATUS_UPDATE_SUCCESS: "تم تغيير حالة نوع المركبة بنجاح",
  VEHICLE_TYPE_DELETE_SUCCESS: "تم حذف نوع المركبة بنجاح",
  VEHICLE_TYPE_INVALID_REQUEST: "طلب نوع المركبة غير صالح",
  VEHICLE_TYPE_ALREADY_EXIST: "نوع المركبة موجود بالفعل",

  // BANNERS
  BANNER_CREATE_SUCCESS: " تم إنشاء/ تسجيل لوحة الإعلان بنجاح",
  BANNER_UPDATE_SUCCESS: "تم تحديث تفاصيل لوحة الإعلان بنجاح",
  BANNER_STATUS_UPDATE_SUCCESS: "تم تغيير حالة لوحة الإعلان بنجاح ",
  BANNER_DELETE_SUCCESS: "تم حذف لوحة الإعلان بنجاح",
  BANNER_INVALID_REQUEST: "طلب لوحة الإعلانات غير صالح",

  // CATEGORY
  CATEGORY_CREATE_SUCCESS: "تم إنشاء/ تسجيل الفئة بنجاح",
  CATEGORY_UPDATE_SUCCESS: "تم تحديث تفاصيل الفئة بنجاح",
  CATEGORY_STATUS_UPDATE_SUCCESS: "تم تغيير حالة الفئة بنجاح",
  CATEGORY_DELETE_SUCCESS: "تم حذف تفاصيل الفئة بنجاح",
  CATEGORY_INVALID_REQUEST: "طلب الفئة غير صالح",
  CATEGORY_ALREADY_EXIST: "الفئة موجودة بالفعل",
  CATEGORY_CANNNOT_DELETE_DUE_TO_SERVICES:
    "لا يمكن حذف الفئة لأنها مرتبطة ببيانات خدمة من الخدمات",
  INVALID_CATEGORY_EXIST_FOR_EXPRESS_DELIVERY:
    " هناك بعض العناصر في سلة الغسيل الخاصة بك لا يتوفر لها التوصيل السريع ",

  // SUBCATEGORY
  SUBCATEGORY_CREATE_SUCCESS: "تم إنشاء/ تسجيل الفئة الفرعية بنجاح",
  SUBCATEGORY_UPDATE_SUCCESS: "تم تحديث تفاصيل الفئة الفرعية بنجاح",
  SUBCATEGORY_STATUS_UPDATE_SUCCESS: "تم تغيير حالة الفئة الفرعية بنجاح",
  SUBCATEGORY_DELETE_SUCCESS: "تم حذف الفئة الفرعية بنجاح",
  SUBCATEGORY_INVALID_REQUEST: " طلب الفئة الفرعية غير صالح",
  SUBCATEGORY_ALREADY_EXIST: "الفئة الفرعية موجودة بالفعل",

  // SERVICE PROVIDER
  SERVICE_PROVIDER_CREATE_SUCCESS: "تم إنشاء/تسجيل مقدم الخدمة بنجاح",
  SERVICE_PROVIDER_UPDATE_SUCCESS: "تم تحديث تفاصيل مقدم الخدمة بنجاح",
  SERVICE_PROVIDER_STATUS_UPDATE_SUCCESS: "تم تغيير حالة مقدم الخدمة بنجاح",
  SERVICE_PROVIDER_DELETE_SUCCESS: "تم حذف تفاصيل مقدم الخدمة بنجاح",
  SERVICE_PROVIDER_INVALID_REQUEST: " طلب مقدم الخدمة غير صالح",
  SERVICE_PROVIDER_ALREADY_EXIST: "مقدم الخدمة موجود بالفعل",

  // CLOTHE RETURN TYPE
  CLOTHE_RETURN_TYPE_CREATE_SUCCESS:
    "تم إنشاء طريقة إرجاع الغسيل/ الملابس بنجاح ",
  CLOTHE_RETURN_TYPE_UPDATE_SUCCESS:
    " تم تحديث تفاصيل طريقة إرجاع الغسيل/الملابس بنجاح ",
  CLOTHE_RETURN_TYPE_STATUS_UPDATE_SUCCESS:
    "تم تغيير حالة طريقة إرجاع الغسيل/الملابس بنجاح ",
  CLOTHE_RETURN_TYPE_DELETE_SUCCESS: "تم حذف طريقة إرجاع الغسيل/الملابس بنجاح ",
  CLOTHE_RETURN_TYPE_INVALID_REQUEST:
    "طلب طريقة إرجاع الغسيل/الملابس غير صالح ",
  CLOTHE_RETURN_TYPE_ALREADY_EXIST: "طريقة إرجاع الغسيل/الملابس موجودة بالفعل",

  // CLEANING TYPE
  CLEANING_TYPE_CREATE_SUCCESS: "تم إنشاء نوع التنظيف بنجاح",
  CLEANING_TYPE_UPDATE_SUCCESS: "تم تحديث تفاصيل نوع التنظيف بنجاح",
  CLEANING_TYPE_STATUS_UPDATE_SUCCESS: "تم تغيير حالة نوع التنظيف بنجاح",
  CLEANING_TYPE_DELETE_SUCCESS: "تم حذف نوع التنظيف بنجاح",
  CLEANING_TYPE_INVALID_REQUEST: "طلب نوع التنظيف غير صالح",
  CLEANING_TYPE_ALREADY_EXIST: "نوع التنظيف موجود بالفعل",

  // TAG
  TAG_CREATE_SUCCESS: "تم إنشاء العلامة المميزة بنجاح",
  TAG_UPDATE_SUCCESS: "تم تحديث تفاصيل العلامة المميزة بنجاح",
  TAG_STATUS_UPDATE_SUCCESS: "تم تغيير حالة العلامة المميزة بنجاح",
  TAG_DELETE_SUCCESS: "تم حذف تفاصيل العلامة المميزة بنجاح",
  TAG_INVALID_REQUEST: "طلب العلامة المميزة غير صالح",
  TAG_ALREADY_EXIST: "العلامة المميزة موجودة بالفعل",

  // SERVICE TYPE
  SERVICE_TYPE_CREATE_SUCCESS: "تم إنشاء نوع الخدمة بنجاح",
  SERVICE_TYPE_UPDATE_SUCCESS: "تم تحديث تفاصيل نوع الخدمة بنجاح",
  SERVICE_TYPE_STATUS_UPDATE_SUCCESS: "تم تغيير حالة نوع الخدمة بنجاح",
  SERVICE_TYPE_DELETE_SUCCESS: "تم حذف تفاصيل نوع الخدمة بنجاح",
  SERVICE_TYPE_INVALID_REQUEST: "طلب نوع الخدمة غير صالح",
  SERVICE_TYPE_ALREADY_EXIST: "نوع الخدمة موجود بالفعل",

  // SOFTENER
  SOFTENER_CREATE_SUCCESS: "تم إنشاء مُنعم بنجاح",
  SOFTENER_UPDATE_SUCCESS: "تم تحديث تفاصيل المُنعم بنجاح",
  SOFTENER_STATUS_UPDATE_SUCCESS: "تم تغيير حالة المُنعم بنجاح",
  SOFTENER_DELETE_SUCCESS: "تم حذف المُنعم بنجاح",
  SOFTENER_INVALID_REQUEST: "طلب المُنعم غير صالح",
  SOFTENER_ALREADY_EXIST: " المُنعم موجود بالفعل",

  // PERFUME
  PERFUME_CREATE_SUCCESS: "تم إنشاء مُعطر بنجاح",
  PERFUME_UPDATE_SUCCESS: "تم تحديث تفاصيل المُعطر بنجاح",
  PERFUME_STATUS_UPDATE_SUCCESS: "تم تغيير حالة المُعطر بنجاح",
  PERFUME_DELETE_SUCCESS: "تم حذف المُعطر بنجاح",
  PERFUME_INVALID_REQUEST: "طلب المعُطر غير صالح",
  PERFUME_ALREADY_EXIST: "المُعطر موجود بالفعل",

  // BLEACH
  BLEACH_CREATE_SUCCESS: "تم إنشاء مُبيض بنجاح",
  BLEACH_UPDATE_SUCCESS: "تم تحديث تفاصيل المُبيض بنجاح ",
  BLEACH_STATUS_UPDATE_SUCCESS: "تم تغيير حالة المُبيض بنجاح",
  BLEACH_DELETE_SUCCESS: "تم حذف المُبيض بنجاح",
  BLEACH_INVALID_REQUEST: "طلب المُبيض غير صالح",
  BLEACH_ALREADY_EXIST: " المُبيض موجود بالفعل",

  // SHAMPOO
  SHAMPOO_CREATE_SUCCESS: "تم إنشاء شامبو بنجاح",
  SHAMPOO_UPDATE_SUCCESS: "تم تحديث تفاصيل الشامبو بنجاح",
  SHAMPOO_STATUS_UPDATE_SUCCESS: "تم تغيير حالة الشامبو بنجاح",
  SHAMPOO_DELETE_SUCCESS: "تم حذف الشامبو بنجاح",
  SHAMPOO_INVALID_REQUEST: "طلب الشامبو غير صالح",

  // SANITIZER
  SANITIZER_CREATE_SUCCESS: "تم إنشاء مُعقم بنجاح",
  SANITIZER_UPDATE_SUCCESS: "تم تحديث تفاصيل المُعقم بنجاح",
  SANITIZER_STATUS_UPDATE_SUCCESS: "تم تغيير حالة المُعقم بنجاح",
  SANITIZER_DELETE_SUCCESS: "تم حذف المُعقم بنجاح",
  SANITIZER_INVALID_REQUEST: "طلب مُعقم غير صالح",

  // PROMOCODES
  PROMOCODE_CREATE_SUCCESS: "تم إنشاء قسيمة الخصم بنجاح",
  PROMOCODE_UPDATE_SUCCESS: "تم تحديث تفاصيل قسائم الخصم بنجاح",
  PROMOCODE_STATUS_UPDATE_SUCCESS: "تم تغيير حالة قسيمة الخصم بنجاح",
  PROMOCODE_DELETE_SUCCESS: "تم حذف قسيمة الخصم بنجاح",
  NEW_PROMOCODE_ALREADY_EXIST: "قسيمة الخصم الجديدة موجودة بالفعل",
  PROMOCODE_ALREADY_EXIST: "قسيمة الخصم موجودة بالفعل",
  PROMOCODE_INVALID_REQUEST: "طلب قسيمة الخصم غير صالح",
  PROMOCODE_INVALID: "قسيمة الخصم غير صالحة",
  PROMOCODE_EXPIRED: "قسيمة الخصم خارج الصلاحية",
  INVALID_PROMOCODE_VENDOR: "إن قسيمة الخصم هذه لا تنطبق على المغسلة المحددة ",
  INVALID_PROMOCODE_VENDOR_PICKUP_DISTANCE:
    "لا تنطبق قسيمة الخصم هذه على مسافة الاستلام من المغسلة",
  INVALID_PROMOCODE_VENDOR_DELIVERY_DISTANCE:
    "لا تنطبق قسيمة الخصم هذه على مسافة التوصيل من المغسلة",
  INVALID_PROMOCODE_MIN_AMOUNT:
    " لا تنطبق قسيمة الخصم هذه على إجمالي المبلغ الفرعي",

  // CART ITEMS
  SERVICE_NOT_AVAILABLE: "الخدمة غير متوفرة",
  INVALID_SERVICE_ITEMS_EXIST: "توجد عناصر خدمة غير صالحة",
  CARTITEM_ADD_SUCCESS: "تم إضافة عنصر إلى سلة الغسيل بنجاح",
  CARTITEM_UPDATE_SUCCESS: "تم تحديث سلة الغسيل بنجاح",
  CARTITEM_REMOVE_SUCCESS: " تمت إزالة عنصر سلة الغسيل بنجاح",
  CART_CLEAR_SUCCESS: " تم افراغ سلة الغسيل بنجاح ",
  CART_IS_EMPTY: " لا توجد عناصر في سلة الغسيل الخاصة بك ",
  ITEM_NOT_EXIST: "العنصر غير موجود",
  ITEM_QUANTITY_EXCEEDED: " العنصر تجاوز الحد الأقصى للكمية المتاحة ",
  CART_ITEMS_QUANTITY_EXCEEDED:
    "هناك بعض العناصر تجاوزت الحد الأقصى للكمية المتاحة",
  ADD_ITEM_VENDOR_RESTRICTION:
    " يُسمح لك بإضافة عناصر مغسلة واحدة في كل مرة إلى سلة الغسيل الخاصة بك",
  INVALID_CARTITEM_REQUEST: "طلب سلة الغسيل غير صالح",

  // FAVOURITE / UNFAVOURITE
  FAVOURITE_SUCCESS: "تمت الإضافة إلى المفضلة ",
  UNFAVOURITE_SUCCESS: "تمت الازالة من المفضلة ",

  // SERVICES
  SERVICE_ALREADY_EXIST: "الخدمة موجودة بالفعل للفئة الفرعية المحددة",
  SERVICE_CREATE_SUCCESS: "تم إنشاء الخدمة بنجاح",
  SERVICE_UPDATE_SUCCESS: "تم تحديث الخدمة بنجاح",
  SERVICE_STATUS_UPDATE_SUCCESS: "تم تغيير حالة الخدمة بنجاح",
  SERVICE_DELETE_SUCCESS: "تم حذف الخدمة بنجاح",
  SERVICE_INVALID_REQUEST: "طلب خدمة غير صالح.",

  // ORDERS
  ORDER_INVALID_REQUEST: " طلب غير صالح",
  INVALID_PICKUP_DATE: "تاريخ الاستلام لا يمكن أن يكون تاريخ ماضي",
  INVALID_PICKUP_ADDRESS: "عنوان الاستلام غير صالح",
  INVALID_DELIVERY_ADDRESS: "عنوان التوصيل غير صالح",
  INVALID_DELIVERY_DATE: "تاريخ التوصيل لا يمكن أن يكون تاريخ ماضي",
  INVALID_CASH_PAYMENT_METHOD: "الدفع نقدا غير متاح حالياً",
  INVALID_CASH_PAYMENT_AMOUNT:
    "المبلغ المطلوب دفعه يتجاوز حدود المبلغ المسموح به نقداً",
  INVALID_CARD_PAYMENT_AMOUNT:
    "يجب أن يكون المبلغ المطلوب دفعه أقل من 999 ريال عماني",
  ORDER_PLACED_SUCCESS: "تم انشاء الطلب بنجاح",
  ORDER_CANNOT_CANCEL: "لا يمكنك إلغاء الطلب الآن",
  ORDER_CANCEL_SUCCESS: "تم إلغاء الطلب بنجاح",
  ORDER_ACCEPT_SUCCESS: "تم قبول الطلب بنجاح",
  ORDER_REJECT_SUCCESS: "تم رفض الطلب بنجاح",
  ORDER_PICKEDUP_SUCCESS: "تم استلام الطلب بواسطة السائق بنجاح",
  ORDER_RECEIVED_SUCCESS: "تم استلام الطلب بواسطة المغسلة بنجاح",
  ORDER_IN_PROCESS_SUCCESS: "تمت معالجة الطلب بنجاح",
  ORDER_FINISHED_SUCCESS: "انتهى الطلب بواسطة المغسلة بنجاح",
  ORDER_DELIVERY_AVAILIBILITY_ACCEPT: "تم تأكيد تواجدك بنجاح",
  ORDER_DELIVERY_AVAILIBILITY_REJECT: "تم تحديث وقت التوصيل بنجاح",
  ORDER_OUT_FOR_DELIVERY_SUCCESS: "الطلب خارج للتوصيل بنجاح",
  ORDER_DELIVERED_SUCCESS: "تم استلام الطلب بواسطة العميل بنجاح",
  ORDER_DRIVER_REQUESTED_SUCCESS: "تم ارسال الطلب للسائق بنجاح",
  ORDER_DRIVER_REMOVED_SUCCESS: "تمت إزالة برنامج التشغيل بنجاح",
  ORDER_FEEDBACK_SUCCESS: "شكراً لك على ملاحظاتك",
  FEEDBACK_ALREADY_EXIST: "لقد قدمت بالفعل ملاحظات لهذا المستخدم",
  ORDER_DELAY_REASON_REQUIRED: "يرجى تقديم سبب وجيه للتأخير",
  ORDER_REASON_REQUIRED: "الرجاء تقديم سبب صحيح",
  ORDER_ACCEPT_DENIED: "لا يمكنك قبول هذا الطلب لأن لديك بالفعل طلبًا آخر",

  // MONEY CLAIMS
  MONEY_CLAIMS_CREATE_SUCCESS: "تم إرسال طلب المطالبة بالإيرادات بنجاح",
  MONEY_CLAIMS_ACCEPTED: "تم قبول طلب المطالبة بالإيرادات بنجاح",
  MONEY_CLAIMS_REJECTED: "تم رفض طلب المطالبة بالإيرادات ",
  MONEY_CLAIMS_INSUFFICIENT_AMOUNT: "المبلغ المتاح غير كافٍ حسب طلب مطالبتك",
  MONEY_CLAIMS_THRESHOLD_LIMIT:
    "يجب أن يكون المبلغ المتاح أكثر من الحد الأدنى للرصيد المطلوب المطالبة به",
  MONEY_CLAIMS_INVALID_REQUEST: "طلب مطالبة إيرادات غير صالح",

  // NOTIFICATION
  NOTIFICATIONS_SENT_SUCCESS: "تم ارسال الإشعارات بنجاح",

  // SETTINGS
  SETTINGS_UPDATE_SUCCESS: "تم تحديث الإعدادات بنجاح",
  SETTINGS_NOT_EXIST: "بيانات الإعدادات غير موجودة",

  // ENQUIRIES
  ENQUIRY_CREATE_SUCCESS: "تم تقديم استفسارك بنجاح",
  INVALID_ENQUIRY_REQUEST: "طلب استفسار غير صالح",

  // CONTENT
  CONTENT_UPDATE_SUCCESS: "تم تحديث المحتويات بنجاح",
  INVALID_CONTENT_KEY: " المحتوى غير صالح",
  NOT_ALLOW_CONTENT_KEY: "غير مسموح تحديث محتويات هذا الملف",

  // FAQS
  FAQ_CREATE_SUCCESS: "تم إنشاء السؤال بنجاح",
  FAQ_UPDATE_SUCCESS: "تم تحديث السؤال بنجاح",
  FAQ_STATUS_UPDATE_SUCCESS: "تم تغيير حالة السؤال بنجاح",
  FAQ_DELETE_SUCCESS: "تم حذف السؤال بنجاح",
  INVALID_FAQ_REQUEST: " طلب سؤال غير صالح",
};
