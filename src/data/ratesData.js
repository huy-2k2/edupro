const ratesData = [
  {
    user_id: 2,
    course_id: 1,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 3,
    course_id: 1,
    score: 9,
    detail: "khóa học rất hay, mình sẽ mua tiếp các khóa của trung tâm",
  },
  {
    user_id: 4,
    course_id: 1,
    score: 7,
    detail: "cách dậy chi tiết nhưng có lúc hơi chậm và không đúng chủ đề",
  },
  {
    user_id: 5,
    course_id: 1,
    score: 8,
    detail:
      "khóa học khá oke, có nhiều đoạn hơi chậm, chất lượng video chưa được tốt lắm",
  },
  {
    user_id: 6,
    course_id: 1,
    score: 8,
    detail: "khóa học khá tốt cho những người mới bắt đầu",
  },
  {
    user_id: 10,
    course_id: 1,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 1,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 12,
    course_id: 1,
    score: 8,
    detail: "Trước em xem nhiều nơi, đến cái này thì thấy dễ hiểu, rất hay ạ",
  },
  {
    user_id: 13,
    course_id: 1,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 15,
    course_id: 1,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 1,
    course_id: 2,
    score: 9,
    detail: "khóa học rất hay và chất lượng",
  },
  {
    user_id: 4,
    course_id: 2,
    score: 7,
    detail: "cách dậy chi tiết nhưng có lúc hơi chậm và không đúng chủ đề",
  },
  {
    user_id: 6,
    course_id: 2,
    score: 8,
    detail: "khóa học khá tốt cho những người mới bắt đầu",
  },
  {
    user_id: 7,
    course_id: 2,
    score: 8,
    detail: "học xong đã có thể xin đi thực tập được luôn",
  },
  {
    user_id: 9,
    course_id: 2,
    score: 8,
    detail:
      "khóa học khá oke cho người mới bắt đầu, những người có kiến thức nền tảng r thì k tốt lắm",
  },
  {
    user_id: 10,
    course_id: 2,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 2,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 12,
    course_id: 2,
    score: 8,
    detail: "Trước em xem nhiều nơi, đến cái này thì thấy dễ hiểu, rất hay ạ",
  },
  {
    user_id: 13,
    course_id: 2,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 14,
    course_id: 2,
    score: 7,
    detail:
      "cần bổ sung thêm hệ thống bài tập, ngồi xem lý thuyết suông dễ gây chán với nhàm",
  },
  {
    user_id: 15,
    course_id: 2,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 1,
    course_id: 3,
    score: 9,
    detail: "khóa học rất hay và chất lượng",
  },
  {
    user_id: 2,
    course_id: 3,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 3,
    course_id: 3,
    score: 9,
    detail: "khóa học rất hay, mình sẽ mua tiếp các khóa của trung tâm",
  },
  {
    user_id: 4,
    course_id: 3,
    score: 7,
    detail: "cách dậy chi tiết nhưng có lúc hơi chậm và không đúng chủ đề",
  },
  {
    user_id: 5,
    course_id: 3,
    score: 8,
    detail:
      "khóa học khá oke, có nhiều đoạn hơi chậm, chất lượng video chưa được tốt lắm",
  },
  {
    user_id: 6,
    course_id: 3,
    score: 8,
    detail: "khóa học khá tốt cho những người mới bắt đầu",
  },
  {
    user_id: 7,
    course_id: 3,
    score: 8,
    detail: "học xong đã có thể xin đi thực tập được luôn",
  },
  {
    user_id: 8,
    course_id: 3,
    score: 9,
    detail: "thầy giáo cute quá trời dậy còn dễ hiểu nữa",
  },
  {
    user_id: 9,
    course_id: 3,
    score: 8,
    detail:
      "khóa học khá oke cho người mới bắt đầu, những người có kiến thức nền tảng r thì k tốt lắm",
  },
  {
    user_id: 10,
    course_id: 3,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 3,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 12,
    course_id: 3,
    score: 8,
    detail: "Trước em xem nhiều nơi, đến cái này thì thấy dễ hiểu, rất hay ạ",
  },
  {
    user_id: 13,
    course_id: 3,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 14,
    course_id: 3,
    score: 7,
    detail:
      "cần bổ sung thêm hệ thống bài tập, ngồi xem lý thuyết suông dễ gây chán với nhàm",
  },
  {
    user_id: 15,
    course_id: 3,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 1,
    course_id: 4,
    score: 9,
    detail: "khóa học rất hay và chất lượng",
  },
  {
    user_id: 2,
    course_id: 4,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 3,
    course_id: 4,
    score: 9,
    detail: "khóa học rất hay, mình sẽ mua tiếp các khóa của trung tâm",
  },
  {
    user_id: 4,
    course_id: 4,
    score: 7,
    detail: "cách dậy chi tiết nhưng có lúc hơi chậm và không đúng chủ đề",
  },
  {
    user_id: 5,
    course_id: 4,
    score: 8,
    detail:
      "khóa học khá oke, có nhiều đoạn hơi chậm, chất lượng video chưa được tốt lắm",
  },
  {
    user_id: 6,
    course_id: 4,
    score: 8,
    detail: "khóa học khá tốt cho những người mới bắt đầu",
  },
  {
    user_id: 7,
    course_id: 4,
    score: 8,
    detail: "học xong đã có thể xin đi thực tập được luôn",
  },
  {
    user_id: 8,
    course_id: 4,
    score: 9,
    detail: "thầy giáo cute quá trời dậy còn dễ hiểu nữa",
  },
  {
    user_id: 9,
    course_id: 4,
    score: 8,
    detail:
      "khóa học khá oke cho người mới bắt đầu, những người có kiến thức nền tảng r thì k tốt lắm",
  },
  {
    user_id: 10,
    course_id: 4,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 4,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 12,
    course_id: 4,
    score: 8,
    detail: "Trước em xem nhiều nơi, đến cái này thì thấy dễ hiểu, rất hay ạ",
  },
  {
    user_id: 13,
    course_id: 4,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 14,
    course_id: 4,
    score: 7,
    detail:
      "cần bổ sung thêm hệ thống bài tập, ngồi xem lý thuyết suông dễ gây chán với nhàm",
  },
  {
    user_id: 15,
    course_id: 4,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 1,
    course_id: 5,
    score: 9,
    detail: "khóa học rất hay và chất lượng",
  },
  {
    user_id: 2,
    course_id: 5,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 3,
    course_id: 5,
    score: 9,
    detail: "khóa học rất hay, mình sẽ mua tiếp các khóa của trung tâm",
  },
  {
    user_id: 4,
    course_id: 5,
    score: 7,
    detail: "cách dậy chi tiết nhưng có lúc hơi chậm và không đúng chủ đề",
  },
  {
    user_id: 5,
    course_id: 5,
    score: 8,
    detail:
      "khóa học khá oke, có nhiều đoạn hơi chậm, chất lượng video chưa được tốt lắm",
  },
  {
    user_id: 6,
    course_id: 5,
    score: 8,
    detail: "khóa học khá tốt cho những người mới bắt đầu",
  },
  {
    user_id: 7,
    course_id: 5,
    score: 8,
    detail: "học xong đã có thể xin đi thực tập được luôn",
  },
  {
    user_id: 8,
    course_id: 5,
    score: 9,
    detail: "thầy giáo cute quá trời dậy còn dễ hiểu nữa",
  },
  {
    user_id: 9,
    course_id: 5,
    score: 8,
    detail:
      "khóa học khá oke cho người mới bắt đầu, những người có kiến thức nền tảng r thì k tốt lắm",
  },
  {
    user_id: 10,
    course_id: 5,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 5,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 12,
    course_id: 5,
    score: 8,
    detail: "Trước em xem nhiều nơi, đến cái này thì thấy dễ hiểu, rất hay ạ",
  },
  {
    user_id: 13,
    course_id: 5,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 14,
    course_id: 5,
    score: 7,
    detail:
      "cần bổ sung thêm hệ thống bài tập, ngồi xem lý thuyết suông dễ gây chán với nhàm",
  },
  {
    user_id: 15,
    course_id: 5,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 1,
    course_id: 6,
    score: 9,
    detail: "khóa học rất hay và chất lượng",
  },
  {
    user_id: 2,
    course_id: 6,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 3,
    course_id: 6,
    score: 9,
    detail: "khóa học rất hay, mình sẽ mua tiếp các khóa của trung tâm",
  },
  {
    user_id: 4,
    course_id: 6,
    score: 7,
    detail: "cách dậy chi tiết nhưng có lúc hơi chậm và không đúng chủ đề",
  },
  {
    user_id: 5,
    course_id: 6,
    score: 8,
    detail:
      "khóa học khá oke, có nhiều đoạn hơi chậm, chất lượng video chưa được tốt lắm",
  },
  {
    user_id: 6,
    course_id: 6,
    score: 8,
    detail: "khóa học khá tốt cho những người mới bắt đầu",
  },
  {
    user_id: 7,
    course_id: 6,
    score: 8,
    detail: "học xong đã có thể xin đi thực tập được luôn",
  },
  {
    user_id: 8,
    course_id: 6,
    score: 9,
    detail: "thầy giáo cute quá trời dậy còn dễ hiểu nữa",
  },
  {
    user_id: 9,
    course_id: 6,
    score: 8,
    detail:
      "khóa học khá oke cho người mới bắt đầu, những người có kiến thức nền tảng r thì k tốt lắm",
  },
  {
    user_id: 10,
    course_id: 6,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 6,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 12,
    course_id: 6,
    score: 8,
    detail: "Trước em xem nhiều nơi, đến cái này thì thấy dễ hiểu, rất hay ạ",
  },
  {
    user_id: 13,
    course_id: 6,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 14,
    course_id: 6,
    score: 7,
    detail:
      "cần bổ sung thêm hệ thống bài tập, ngồi xem lý thuyết suông dễ gây chán với nhàm",
  },
  {
    user_id: 15,
    course_id: 6,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 1,
    course_id: 7,
    score: 9,
    detail: "khóa học rất hay và chất lượng",
  },
  {
    user_id: 2,
    course_id: 7,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 3,
    course_id: 7,
    score: 9,
    detail: "khóa học rất hay, mình sẽ mua tiếp các khóa của trung tâm",
  },
  {
    user_id: 4,
    course_id: 7,
    score: 7,
    detail: "cách dậy chi tiết nhưng có lúc hơi chậm và không đúng chủ đề",
  },
  {
    user_id: 5,
    course_id: 7,
    score: 8,
    detail:
      "khóa học khá oke, có nhiều đoạn hơi chậm, chất lượng video chưa được tốt lắm",
  },
  {
    user_id: 6,
    course_id: 7,
    score: 8,
    detail: "khóa học khá tốt cho những người mới bắt đầu",
  },
  {
    user_id: 7,
    course_id: 7,
    score: 8,
    detail: "học xong đã có thể xin đi thực tập được luôn",
  },
  {
    user_id: 8,
    course_id: 7,
    score: 9,
    detail: "thầy giáo cute quá trời dậy còn dễ hiểu nữa",
  },
  {
    user_id: 9,
    course_id: 7,
    score: 8,
    detail:
      "khóa học khá oke cho người mới bắt đầu, những người có kiến thức nền tảng r thì k tốt lắm",
  },
  {
    user_id: 10,
    course_id: 7,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 7,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 12,
    course_id: 7,
    score: 8,
    detail: "Trước em xem nhiều nơi, đến cái này thì thấy dễ hiểu, rất hay ạ",
  },
  {
    user_id: 13,
    course_id: 7,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 14,
    course_id: 7,
    score: 7,
    detail:
      "cần bổ sung thêm hệ thống bài tập, ngồi xem lý thuyết suông dễ gây chán với nhàm",
  },
  {
    user_id: 15,
    course_id: 7,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 1,
    course_id: 8,
    score: 9,
    detail: "khóa học rất hay và chất lượng",
  },
  {
    user_id: 2,
    course_id: 8,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 3,
    course_id: 8,
    score: 9,
    detail: "khóa học rất hay, mình sẽ mua tiếp các khóa của trung tâm",
  },
  {
    user_id: 4,
    course_id: 8,
    score: 7,
    detail: "cách dậy chi tiết nhưng có lúc hơi chậm và không đúng chủ đề",
  },
  {
    user_id: 5,
    course_id: 8,
    score: 8,
    detail:
      "khóa học khá oke, có nhiều đoạn hơi chậm, chất lượng video chưa được tốt lắm",
  },
  {
    user_id: 8,
    course_id: 8,
    score: 9,
    detail: "thầy giáo cute quá trời dậy còn dễ hiểu nữa",
  },
  {
    user_id: 9,
    course_id: 8,
    score: 8,
    detail:
      "khóa học khá oke cho người mới bắt đầu, những người có kiến thức nền tảng r thì k tốt lắm",
  },
  {
    user_id: 10,
    course_id: 8,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 8,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 12,
    course_id: 8,
    score: 8,
    detail: "Trước em xem nhiều nơi, đến cái này thì thấy dễ hiểu, rất hay ạ",
  },
  {
    user_id: 13,
    course_id: 8,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 1,
    course_id: 9,
    score: 9,
    detail: "khóa học rất hay và chất lượng",
  },
  {
    user_id: 2,
    course_id: 9,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 3,
    course_id: 9,
    score: 9,
    detail: "khóa học rất hay, mình sẽ mua tiếp các khóa của trung tâm",
  },
  {
    user_id: 4,
    course_id: 9,
    score: 7,
    detail: "cách dậy chi tiết nhưng có lúc hơi chậm và không đúng chủ đề",
  },
  {
    user_id: 5,
    course_id: 9,
    score: 8,
    detail:
      "khóa học khá oke, có nhiều đoạn hơi chậm, chất lượng video chưa được tốt lắm",
  },
  {
    user_id: 6,
    course_id: 9,
    score: 8,
    detail: "khóa học khá tốt cho những người mới bắt đầu",
  },
  {
    user_id: 10,
    course_id: 9,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 9,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 12,
    course_id: 9,
    score: 8,
    detail: "Trước em xem nhiều nơi, đến cái này thì thấy dễ hiểu, rất hay ạ",
  },
  {
    user_id: 13,
    course_id: 9,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 15,
    course_id: 9,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 1,
    course_id: 10,
    score: 9,
    detail: "khóa học rất hay và chất lượng",
  },
  {
    user_id: 2,
    course_id: 10,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 6,
    course_id: 10,
    score: 8,
    detail: "khóa học khá tốt cho những người mới bắt đầu",
  },
  {
    user_id: 8,
    course_id: 10,
    score: 9,
    detail: "thầy giáo cute quá trời dậy còn dễ hiểu nữa",
  },
  {
    user_id: 9,
    course_id: 10,
    score: 8,
    detail:
      "khóa học khá oke cho người mới bắt đầu, những người có kiến thức nền tảng r thì k tốt lắm",
  },
  {
    user_id: 10,
    course_id: 10,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 14,
    course_id: 10,
    score: 7,
    detail:
      "cần bổ sung thêm hệ thống bài tập, ngồi xem lý thuyết suông dễ gây chán với nhàm",
  },
  {
    user_id: 15,
    course_id: 10,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 2,
    course_id: 11,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 3,
    course_id: 11,
    score: 9,
    detail: "khóa học rất hay, mình sẽ mua tiếp các khóa của trung tâm",
  },
  {
    user_id: 8,
    course_id: 11,
    score: 9,
    detail: "thầy giáo cute quá trời dậy còn dễ hiểu nữa",
  },
  {
    user_id: 10,
    course_id: 11,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 11,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 13,
    course_id: 11,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 15,
    course_id: 11,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 2,
    course_id: 12,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 3,
    course_id: 12,
    score: 9,
    detail: "khóa học rất hay, mình sẽ mua tiếp các khóa của trung tâm",
  },
  {
    user_id: 8,
    course_id: 12,
    score: 9,
    detail: "thầy giáo cute quá trời dậy còn dễ hiểu nữa",
  },
  {
    user_id: 10,
    course_id: 12,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 12,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 13,
    course_id: 12,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 15,
    course_id: 12,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 2,
    course_id: 13,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 10,
    course_id: 13,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 13,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 13,
    course_id: 13,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 15,
    course_id: 13,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 2,
    course_id: 14,
    score: 8,
    detail: "kiến thức bổ ích nhưng chất lượng video không được tốt cho lắm",
  },
  {
    user_id: 10,
    course_id: 14,
    score: 8,
    detail:
      "học dễ hiểu cực, học bên web còn có cả bài tập để luyện tập. Giọng anh này nói dễ nghe, lưu loát",
  },
  {
    user_id: 11,
    course_id: 14,
    score: 8,
    detail:
      "mình lướt trên web, youtube và mình chưa thấy ở đâu dạy bằng tiếng việt hay và dễ hiểu như ở kênh này cả",
  },
  {
    user_id: 13,
    course_id: 14,
    score: 8,
    detail:
      "e cảm thấy dạy rất dễ hiểu và chi tiết hơn các kênh dạy lập trình khác",
  },
  {
    user_id: 15,
    course_id: 14,
    score: 8,
    detail:
      "Ông này nói chuyện vui và hài hước, giọng bắc như thế này nói cực kỳ dễ nghe",
  },
  {
    user_id: 1,
    course_id: 15,
    score: 9,
    detail: "Khoá học mang lại cho em nhiều kiến thức rất bổ ích ạ",
  },
  {
    user_id: 2,
    course_id: 15,
    score: 9,
    detail: "Thầy dạy rất dễ hiểu, nhiệt tình nhắc lại, bài ngắn gọn.",
  },
  {
    user_id: 3,
    course_id: 15,
    score: 8,
    detail: "Khóa học rất tốt dễ hiểu ạ",
  },
  {
    user_id: 4,
    course_id: 15,
    score: 9,
    detail:
      "có những cách giải mà em chưa từng được dạy trên lớp, trình độ học tập của em được nâng cao một cách đáng kể",
  },
  {
    user_id: 5,
    course_id: 15,
    score: 8,
    detail:
      "Thầy cô giảng bài dễ hiểu, bài tập dễ áp dụng, hệ thống làm bài nên giải thích cách làm kĩ hơn một chút cho những bạn tự học",
  },
  {
    user_id: 1,
    course_id: 16,
    score: 9,
    detail: "Khoá học mang lại cho em nhiều kiến thức rất bổ ích ạ",
  },
  {
    user_id: 2,
    course_id: 16,
    score: 9,
    detail: "Thầy dạy rất dễ hiểu, nhiệt tình nhắc lại, bài ngắn gọn.",
  },
  {
    user_id: 3,
    course_id: 16,
    score: 8,
    detail: "Khóa học rất tốt dễ hiểu ạ",
  },
  {
    user_id: 4,
    course_id: 16,
    score: 9,
    detail:
      "có những cách giải mà em chưa từng được dạy trên lớp, trình độ học tập của em được nâng cao một cách đáng kể",
  },
  {
    user_id: 5,
    course_id: 16,
    score: 8,
    detail:
      "Thầy cô giảng bài dễ hiểu, bài tập dễ áp dụng, hệ thống làm bài nên giải thích cách làm kĩ hơn một chút cho những bạn tự học",
  },
  {
    user_id: 1,
    course_id: 17,
    score: 9,
    detail: "Khoá học mang lại cho em nhiều kiến thức rất bổ ích ạ",
  },
  {
    user_id: 2,
    course_id: 17,
    score: 9,
    detail: "Thầy dạy rất dễ hiểu, nhiệt tình nhắc lại, bài ngắn gọn.",
  },
  {
    user_id: 3,
    course_id: 17,
    score: 8,
    detail: "Khóa học rất tốt dễ hiểu ạ",
  },
  {
    user_id: 4,
    course_id: 17,
    score: 9,
    detail:
      "có những cách giải mà em chưa từng được dạy trên lớp, trình độ học tập của em được nâng cao một cách đáng kể",
  },
  {
    user_id: 5,
    course_id: 17,
    score: 8,
    detail:
      "Thầy cô giảng bài dễ hiểu, bài tập dễ áp dụng, hệ thống làm bài nên giải thích cách làm kĩ hơn một chút cho những bạn tự học",
  },
  {
    user_id: 1,
    course_id: 18,
    score: 9,
    detail: "Khoá học mang lại cho em nhiều kiến thức rất bổ ích ạ",
  },
  {
    user_id: 2,
    course_id: 18,
    score: 9,
    detail: "Thầy dạy rất dễ hiểu, nhiệt tình nhắc lại, bài ngắn gọn.",
  },
  {
    user_id: 3,
    course_id: 18,
    score: 8,
    detail: "Khóa học rất tốt dễ hiểu ạ",
  },
  {
    user_id: 4,
    course_id: 18,
    score: 9,
    detail:
      "có những cách giải mà em chưa từng được dạy trên lớp, trình độ học tập của em được nâng cao một cách đáng kể",
  },
  {
    user_id: 5,
    course_id: 18,
    score: 8,
    detail:
      "Thầy cô giảng bài dễ hiểu, bài tập dễ áp dụng, hệ thống làm bài nên giải thích cách làm kĩ hơn một chút cho những bạn tự học",
  },
  {
    user_id: 1,
    course_id: 19,
    score: 9,
    detail: "Khoá học mang lại cho em nhiều kiến thức rất bổ ích ạ",
  },
  {
    user_id: 2,
    course_id: 19,
    score: 9,
    detail: "Thầy dạy rất dễ hiểu, nhiệt tình nhắc lại, bài ngắn gọn.",
  },
  {
    user_id: 3,
    course_id: 19,
    score: 8,
    detail: "Khóa học rất tốt dễ hiểu ạ",
  },
  {
    user_id: 4,
    course_id: 19,
    score: 9,
    detail:
      "có những cách giải mà em chưa từng được dạy trên lớp, trình độ học tập của em được nâng cao một cách đáng kể",
  },
  {
    user_id: 5,
    course_id: 19,
    score: 8,
    detail:
      "Thầy cô giảng bài dễ hiểu, bài tập dễ áp dụng, hệ thống làm bài nên giải thích cách làm kĩ hơn một chút cho những bạn tự học",
  },
  {
    user_id: 1,
    course_id: 20,
    score: 9,
    detail: "Khoá học mang lại cho em nhiều kiến thức rất bổ ích ạ",
  },
  {
    user_id: 2,
    course_id: 20,
    score: 9,
    detail: "Thầy dạy rất dễ hiểu, nhiệt tình nhắc lại, bài ngắn gọn.",
  },
  {
    user_id: 3,
    course_id: 20,
    score: 8,
    detail: "Khóa học rất tốt dễ hiểu ạ",
  },
  {
    user_id: 4,
    course_id: 20,
    score: 9,
    detail:
      "có những cách giải mà em chưa từng được dạy trên lớp, trình độ học tập của em được nâng cao một cách đáng kể",
  },
  {
    user_id: 5,
    course_id: 20,
    score: 8,
    detail:
      "Thầy cô giảng bài dễ hiểu, bài tập dễ áp dụng, hệ thống làm bài nên giải thích cách làm kĩ hơn một chút cho những bạn tự học",
  },
  {
    user_id: 1,
    course_id: 21,
    score: 9,
    detail: "Khoá học mang lại cho em nhiều kiến thức rất bổ ích ạ",
  },
  {
    user_id: 2,
    course_id: 21,
    score: 9,
    detail: "Thầy dạy rất dễ hiểu, nhiệt tình nhắc lại, bài ngắn gọn.",
  },
  {
    user_id: 3,
    course_id: 21,
    score: 8,
    detail: "Khóa học rất tốt dễ hiểu ạ",
  },
  {
    user_id: 4,
    course_id: 21,
    score: 9,
    detail:
      "có những cách giải mà em chưa từng được dạy trên lớp, trình độ học tập của em được nâng cao một cách đáng kể",
  },
  {
    user_id: 5,
    course_id: 21,
    score: 8,
    detail:
      "Thầy cô giảng bài dễ hiểu, bài tập dễ áp dụng, hệ thống làm bài nên giải thích cách làm kĩ hơn một chút cho những bạn tự học",
  },
  {
    user_id: 1,
    course_id: 22,
    score: 9,
    detail: "Khoá học mang lại cho em nhiều kiến thức rất bổ ích ạ",
  },
  {
    user_id: 2,
    course_id: 22,
    score: 9,
    detail: "Thầy dạy rất dễ hiểu, nhiệt tình nhắc lại, bài ngắn gọn.",
  },
  {
    user_id: 3,
    course_id: 22,
    score: 8,
    detail: "Khóa học rất tốt dễ hiểu ạ",
  },
  {
    user_id: 4,
    course_id: 22,
    score: 9,
    detail:
      "có những cách giải mà em chưa từng được dạy trên lớp, trình độ học tập của em được nâng cao một cách đáng kể",
  },
  {
    user_id: 5,
    course_id: 22,
    score: 8,
    detail:
      "Thầy cô giảng bài dễ hiểu, bài tập dễ áp dụng, hệ thống làm bài nên giải thích cách làm kĩ hơn một chút cho những bạn tự học",
  },
  {
    user_id: 1,
    course_id: 23,
    score: 9,
    detail: "Khoá học mang lại cho em nhiều kiến thức rất bổ ích ạ",
  },
  {
    user_id: 2,
    course_id: 23,
    score: 9,
    detail: "Thầy dạy rất dễ hiểu, nhiệt tình nhắc lại, bài ngắn gọn.",
  },
  {
    user_id: 3,
    course_id: 23,
    score: 8,
    detail: "Khóa học rất tốt dễ hiểu ạ",
  },
  {
    user_id: 4,
    course_id: 23,
    score: 9,
    detail:
      "có những cách giải mà em chưa từng được dạy trên lớp, trình độ học tập của em được nâng cao một cách đáng kể",
  },
  {
    user_id: 5,
    course_id: 23,
    score: 8,
    detail:
      "Thầy cô giảng bài dễ hiểu, bài tập dễ áp dụng, hệ thống làm bài nên giải thích cách làm kĩ hơn một chút cho những bạn tự học",
  },
];

export default ratesData;
