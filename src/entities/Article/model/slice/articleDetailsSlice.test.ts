// import {
//     Article,
//     ArticleDetails,
//     ArticleDetailsSchema,
//     getArticleById,
// } from 'entities/Article';
// import { ArticleType, ArticleBlockType } from '../types/article';
// // import {
// //     profileActions, profileReducer, ProfileSchema, updateProfileData, ValidateProfileError,
// // } from 'entities/Article';

// const article: Article = {
//     id: '1',
//     title: 'Test',
//     subtitle: 'Subtitle text',
//     img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
//     views: 1022,
//     createdAt: '26.02.2022',
//     type: [ArticleType.IT],
//     blocks: [
//         {
//             id: '1',
//             type: ArticleBlockType.TEXT,
//             title: 'Заголовок этого блока',
//             paragraphs: [
//                 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
//                 'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
//                 'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
//             ],
//         },
//         {
//             id: '4',
//             type: ArticleBlockType.CODE,
//             code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
//         },
//         {
//             id: '5',
//             type: ArticleBlockType.TEXT,
//             title: 'Заголовок этого блока',
//             paragraphs: [
//                 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
//                 'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
//             ],
//         },
//     ],
// };

// describe('articleDetailsSlice.test', () => {
//     test('test set readonly', () => {
//         const state: DeepPartial<ArticleDetailsSchema> = { article };
//         expect(articleDetailsReducer(
//             state as ArticleDetailsSchema,
//             profileActions.setReadonly(true),
//         )).toEqual({ readonly: true });
//     });

//     test('test cancel edit', () => {
//         const state: DeepPartial<ArticleDetailsSchema> = { article, form: { username: '' } };
//         expect(profileReducer(
//             state as ProfileSchema,
//             profileActions.cancelEdit(),
//         )).toEqual({
//             readonly: true,
//             validateErrors: undefined,
//             data,
//             form: data,
//         });
//     });

//     test('test update profile', () => {
//         const state: DeepPartial<ArticleDetailsSchema> = { form: { username: '123' } };
//         expect(profileReducer(
//             state as ProfileSchema,
//             profileActions.updateProfile({
//                 username: '123456',
//             }),
//         )).toEqual({
//             form: { username: '123456' },
//         });
//     });

//     test('test update profile service pending', () => {
//         const state: DeepPartial<ProfileSchema> = {
//             isLoading: false,
//             validateErrors: [ValidateProfileError.SERVER_ERROR],
//         };
//         expect(profileReducer(
//             state as ProfileSchema,
//             updateProfileData.pending,
//         )).toEqual({
//             isLoading: true,
//             validateErrors: undefined,
//         });
//     });

//     test('test update profile service fullfiled', () => {
//         const state: DeepPartial<ArticleDetailsSchema> = {
//             isLoading: true,
//         };

//         expect(profileReducer(
//             state as ArticleDetailsSchema,
//             getArticleById.fulfilled(data, ''),
//         )).toEqual({
//             isLoading: false,
//             validateErrors: undefined,
//             readonly: true,
//             validateError: undefined,
//             form: data,
//             data,
//         });
//     });
// });
