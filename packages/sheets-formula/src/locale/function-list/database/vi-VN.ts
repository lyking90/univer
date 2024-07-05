/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default {
    DAVERAGE: {
        description: 'Trả về giá trị trung bình của các mục được chọn trong cơ sở dữ liệu',
        abstract: 'Trả về giá trị trung bình của các mục được chọn trong cơ sở dữ liệu',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/daverage-%E5%87%BD%E6%95%B0-a6a2d5ac-4b4b-48cd-a1d8-7b37834e5aee',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
    DCOUNT: {
        description: 'Đếm số ô chứa số trong cơ sở dữ liệu',
        abstract: 'Đếm số ô chứa số trong cơ sở dữ liệu',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/dcount-%E5%87%BD%E6%95%B0-c1fc7b93-fb0d-4d8d-97db-8d5f076eaeb1',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
    DCOUNTA: {
        description: 'Đếm số ô không trống trong cơ sở dữ liệu',
        abstract: 'Đếm số ô không trống trong cơ sở dữ liệu',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/dcounta-%E5%87%BD%E6%95%B0-00232a6d-5a66-4a01-a25b-c1653fda1244',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
    DGET: {
        description: 'Trích xuất một bản ghi duy nhất từ cơ sở dữ liệu khớp với các điều kiện đã chỉ định',
        abstract: 'Trích xuất một bản ghi duy nhất từ cơ sở dữ liệu khớp với các điều kiện đã chỉ định',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/dget-%E5%87%BD%E6%95%B0-455568bf-4eef-45f7-90f0-ec250d00892e',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
    DMAX: {
        description: 'Trả về giá trị lớn nhất của các mục được chọn trong cơ sở dữ liệu',
        abstract: 'Trả về giá trị lớn nhất của các mục được chọn trong cơ sở dữ liệu',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/dmax-%E5%87%BD%E6%95%B0-f4e8209d-8958-4c3d-a1ee-6351665d41c2',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
    DMIN: {
        description: 'Trả về giá trị nhỏ nhất của các mục được chọn trong cơ sở dữ liệu',
        abstract: 'Trả về giá trị nhỏ nhất của các mục được chọn trong cơ sở dữ liệu',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/dmin-%E5%87%BD%E6%95%B0-4ae6f1d9-1f26-40f1-a783-6dc3680192a3',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
    DPRODUCT: {
        description: 'Nhân các giá trị trong trường cụ thể của các bản ghi trong cơ sở dữ liệu khớp với các điều kiện đã chỉ định',
        abstract: 'Nhân các giá trị trong trường cụ thể của các bản ghi trong cơ sở dữ liệu khớp với các điều kiện đã chỉ định',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/dproduct-%E5%87%BD%E6%95%B0-4f96b13e-d49c-47a7-b769-22f6d017cb31',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
    DSTDEV: {
        description: 'Ước tính độ lệch chuẩn dựa trên mẫu của các mục được chọn trong cơ sở dữ liệu',
        abstract: 'Ước tính độ lệch chuẩn dựa trên mẫu của các mục được chọn trong cơ sở dữ liệu',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/dstdev-%E5%87%BD%E6%95%B0-026b8c73-616d-4b5e-b072-241871c4ab96',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
    DSTDEVP: {
        description: 'Tính toán độ lệch chuẩn dựa trên tổng thể mẫu của các mục được chọn trong cơ sở dữ liệu',
        abstract: 'Tính toán độ lệch chuẩn dựa trên tổng thể mẫu của các mục được chọn trong cơ sở dữ liệu',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/dstdevp-%E5%87%BD%E6%95%B0-04b78995-da03-4813-bbd9-d74fd0f5d94b',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
    DSUM: {
        description: 'Tính tổng các số trong cột trường của các bản ghi trong cơ sở dữ liệu khớp với các điều kiện đã chỉ định',
        abstract: 'Tính tổng các số trong cột trường của các bản ghi trong cơ sở dữ liệu khớp với các điều kiện đã chỉ định',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/dsum-%E5%87%BD%E6%95%B0-53181285-0c4b-4f5a-aaa3-529a322be41b',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
    DVAR: {
        description: 'Ước tính phương sai dựa trên mẫu của các mục được chọn trong cơ sở dữ liệu',
        abstract: 'Ước tính phương sai dựa trên mẫu của các mục được chọn trong cơ sở dữ liệu',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/dvar-%E5%87%BD%E6%95%B0-d6747ca9-99c7-48bb-996e-9d7af00f3ed1',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
    DVARP: {
        description: 'Tính toán phương sai dựa trên tổng thể mẫu của các mục được chọn trong cơ sở dữ liệu',
        abstract: 'Tính toán phương sai dựa trên tổng thể mẫu của các mục được chọn trong cơ sở dữ liệu',
        links: [
            {
                title: 'Hướng dẫn',
                url: 'https://support.microsoft.com/zh-cn/office/dvarp-%E5%87%BD%E6%95%B0-eb0ba387-9cb7-45c8-81e9-0394912502fc',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'Tham số thứ nhất' },
            number2: { name: 'number2', detail: 'Tham số thứ hai' },
        },
    },
};
